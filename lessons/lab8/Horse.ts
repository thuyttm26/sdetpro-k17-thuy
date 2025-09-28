import BaseAnimal from "./BaseAnimal";

export default class Horse extends BaseAnimal {
  private static readonly MAX_SPEED = 75;
  constructor(name: string = "Horse") {
    super(name, BaseAnimal.generateRandomSpeed(Horse.MAX_SPEED));
  }
}
