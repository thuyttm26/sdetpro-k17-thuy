export default class BaseAnimal {
  protected maxSpeed: number = 0;
  protected name: string = "Animal";

  constructor(name: string, maxSpeed: number) {
    this.name = name;
    this.maxSpeed = maxSpeed;
  }
  public getSpeed() {
    return Math.floor(Math.random() * this.maxSpeed + 1);
  }
  public getName() {
    return this.name;
  }
}
