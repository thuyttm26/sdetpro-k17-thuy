export default class BaseAnimal {
  protected speed: number = 0;
  protected name: string = "Animal";

  constructor(name: string = "Animal", speed: number = 0) {
    this.name = name;
    this.speed = speed;
  }

  protected setSpeed(speed: number) {
    this.speed = speed;
  }
  protected setName(name: string) {
    this.name = name;
  }

  public getSpeed(): number {
    return this.speed;
  }
  public getName() {
    return this.name;
  }
  public static generateRandomSpeed(maxSpeed: number): number {
    if (maxSpeed <= 0) return 0;
    return Math.floor(Math.random() * maxSpeed) + 1;
  }
}
