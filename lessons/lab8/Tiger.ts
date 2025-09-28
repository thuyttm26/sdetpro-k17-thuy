import BaseAnimal from "./BaseAnimal";

export default class Tiger extends BaseAnimal {
  private static readonly MAX_SPEED = 100;
  constructor(name: string = "Tiger") {
    super(name, BaseAnimal.generateRandomSpeed(Tiger.MAX_SPEED));
  }
}
