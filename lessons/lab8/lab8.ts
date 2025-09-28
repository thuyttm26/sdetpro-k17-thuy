import RaceController from "./RaceController";
import Tiger from "./Tiger";
import Dog from "./Dog";
import Horse from "./Horse";

const animals = [new Tiger(), new Dog(), new Horse()];
const results = RaceController.collectResults(animals);
const maxSpeed = RaceController.findMaxSpeed(results);
const winners = RaceController.findWinners(results, maxSpeed);

RaceController.printResults(results, winners, maxSpeed);
