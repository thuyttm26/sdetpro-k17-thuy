import Animal from "./Animal";
import { MAX_SPEED } from "./SpeedConstants";

export default class Dog extends Animal {
  constructor() {
    super("Ki", Math.floor(Math.random() * MAX_SPEED.dog));
  }
}
