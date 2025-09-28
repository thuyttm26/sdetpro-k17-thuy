import BaseAnimal from "./BaseAnimal";

export default class Dog extends BaseAnimal {
  private static readonly MAX_SPEED = 60;
  constructor(name: string = "Dog") {
    super(name, BaseAnimal.generateRandomSpeed(Dog.MAX_SPEED));
  }
}
