import BaseAnimal from "./BaseAnimal";

type Attempt = { name: string; speed: number };

export default { collectResults, findMaxSpeed, findWinners, printResults };

function collectResults(animalList: BaseAnimal[]): Attempt[] {
  const results: Attempt[] = [];
  for (const animal of animalList) {
    results.push({ name: animal.getName(), speed: animal.getSpeed() });
  }
  return results;
}

function findMaxSpeed(results: Attempt[]): number {
  let maxSpeed = 0;
  for (let index = 0; index < results.length; index++) {
    if (results[index].speed > maxSpeed) {
      maxSpeed = results[index].speed;
    }
  }
  return maxSpeed;
}

function findWinners(results: Attempt[], maxSpeed: number): Attempt[] {
  const winners: Attempt[] = [];
  for (let index = 0; index < results.length; index++) {
    if (results[index].speed === maxSpeed) {
      winners.push(results[index]);
    }
  }
  return winners;
}

function printResults(
  results: Attempt[],
  winners: Attempt[],
  maxSpeed: number
): void {
  for (const result of results) {
    console.log(result.name + " runs at " + result.speed + " km/h");
  }
  if (winners.length === 1) {
    console.log(
      "Winner is: " +
        winners[0].name +
        " with speed: " +
        winners[0].speed +
        " km/h"
    );
  } else {
    let names = "";
    for (let index = 0; index < winners.length; index++) {
      if (index > 0) names = names + ", ";
      names = winners[index].name + names;
      console.log(
        "Winners are: " + names + " with speed: " + maxSpeed + " km/h"
      );
    }
  }
}
