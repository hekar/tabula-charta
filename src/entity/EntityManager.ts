import { Entity } from "./Entity";

export class EntityManager implements Entity {
  constructor(readonly entities: Array<Entity> = []) {}

  init(): void {}

  animate(): void {
    for (const entity of this.entities) {
      entity.animate();
    }
  }

  add(entity: Entity) {
    this.entities.push(entity);
  }
}
