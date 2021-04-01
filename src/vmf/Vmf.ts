/**
 * https://developer.valvesoftware.com/wiki/Valve_Map_Format#The_structure_of_.vmf
 */
import { VmfHidden, VmfVersionInfo, VmfVisGroups, VmfWorld } from "./types";
import { VmfCamera } from "./VmfCamera";
import { VmfCordon } from "./VmfCordon";
import { VmfEntity } from "./VmfEntity";

class VmfParseNode {
  readonly children: Array<VmfParseNode>;
  readonly properties: Record<string, string>;

  constructor(
    readonly parent: VmfParseNode | undefined,
    private readonly tag: string
  ) {
    this.properties = {};
    this.children = [];
  }

  add(child: VmfParseNode): void {
    this.children.push(child);
  }
}

type VmfParserState =
  | "root"
  | "tag_name"
  | "start_tag"
  | "property"
  | "in_tag"
  | "end_tag";

class VmfParser {
  private readonly root: VmfParseNode;
  constructor(private readonly content: string) {
    this.root = new VmfParseNode(undefined, "");
  }

  parse() {
    this.parseAst();
  }

  private parseAst(): void {
    const lines = this.content.split("\n");
    let state: VmfParserState = "root";
    let cur = this.root;
    for (const line of lines) {
      state = this.conditionallyModifyState(line) ?? state;
      if (state === "tag_name") {
        const parent = cur;
        // The root node has no tag or properties ignore it.
        const tagName = line.trim();
        if (tagName) {
          cur = new VmfParseNode(parent, tagName);
          parent.add(cur);
        }
      } else if (state === "end_tag") {
        if (cur.parent !== undefined) {
          cur = cur.parent;
        }
      } else if (state === "property") {
        const match = /\s*"(.*?)"\s+"(.*?)"\s*$/.exec(line);
        if (match) {
          const [all, key, value] = match;
          cur.properties[key] = value;
        }
      }
    }
  }

  private conditionallyModifyState(line: string): VmfParserState | undefined {
    if (/\s*\{\s*/.test(line)) {
      return "start_tag";
    } else if (/\s*\}\s*/.test(line)) {
      return "end_tag";
    } else if (/\s*[a-zA-Z0-9_]*$/.test(line) && line.indexOf('"') === -1) {
      return "tag_name";
    } else if (/\s*"(.*?)"\s+"(.*?)"\s*$/.test(line)) {
      return "property";
    } else {
      return undefined;
    }
  }
}

export class Vmf {
  readonly versioninfo: VmfVersionInfo;
  readonly visgroups: VmfVisGroups;
  readonly world: VmfWorld;
  readonly entity: Array<VmfEntity>;
  readonly hidden: Array<VmfHidden>;
  readonly cameras: Array<VmfCamera>;
  readonly cordons: Array<VmfCordon>;

  constructor() {}

  loads(content: string) {
    const parser = new VmfParser(content);
    parser.parse();
  }
}
