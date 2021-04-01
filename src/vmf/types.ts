export type VmfVersionInfo = {
  editorversion: string;
  editorbuild: string;
  mapversion: string;
  formatversion: string;
  prefab: string;
};

export type VmfVisGroups = {};

export type VmfViewSettings = {
  bSnapToGrid: string;
  bShowGrid: string;
  bShowLogicalGrid: string;
  nGridSpacing: string;
  bShow3DGrid: string;
};

export type VmfSolidSideDispInfo = {};

export type VmfSolidSide = {
  id: string;
  plane: string;
  material: string;
  uaxis: string;
  vaxis: string;
  rotation: string;
  lightmapscale: string;
  smoothing_groups: string;
  dispinfo: VmfSolidSideDispInfo;
};

export type VmfSolidEditors = {};

export type VmfSolid = {
  id: string;
  sides: Array<VmfSolidSide>;
  editors: Array<VmfSolidEditors>;
};

export type VmfHidden = {};

export type VmfGroup = {};

export type VmfWorld = {
  id: string;
  mapversion: string;
  classname: string;
  detailmaterial: string;
  detailvbsp: string;
  gamemode: string;
  maxpropscreenwidth: string;
  skyname: string;
  solids: Array<VmfSolid>;
  hidden: Array<VmfHidden>;
  group: Array<VmfGroup>;
};

export type VmfFileContent = {
  versioninfo: VmfVersionInfo;
  visgroups: VmfVisGroups;
  viewsettings: VmfViewSettings;
  world: VmfWorld;
};

export class VmfRoot {
  constructor(
    readonly versioninfo: VmfVersionInfo,
    readonly visgroups: VmfVisGroups,
    readonly viewsettings: VmfViewSettings,
    readonly world: VmfWorld
  ) {}
}
