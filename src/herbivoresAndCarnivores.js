'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(sacrifice) {
    if (!sacrifice.hidden && sacrifice instanceof Herbivore) {
      sacrifice.health -= 50;

      if (sacrifice.health === 0) {
        const i = Animal.alive.indexOf(sacrifice);

        Animal.alive.splice(i, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
