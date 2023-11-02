import Character, { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from '../app';

test('test name length', () => {
  const pers = () => new Character('a', 'Magician');
  expect(pers).toThrow('Имя должно содержать от 2 до 10 символов!');
})

test('test type of character', () => {
  const pers = () => new Character('mag', 'Mag');
  expect(pers).toThrow('Персонаж должен соответствовать одному из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
})

test('test of character object', () => {
  const pers1 = new Character('magic', 'Magician');
  const pers2 = {
    name: 'magic',
    type: 'Magician',
    health: 100,
    level: 1,
  }
  expect(pers1).toEqual(pers2);
})

test('test of bowerman', () => {
  const bowman1 = new Bowerman('bowman');
  const bowman2 = {
    name: 'bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }
  expect(bowman1).toEqual(bowman2);
})

test('test of swordsman', () => {
  const swordsman1 = new Swordsman('swordsman');
  const swordsman2 = {
    name: 'swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }
  expect(swordsman1).toEqual(swordsman2);
})

test('test of magician', () => {
  const magician1 = new Magician('magician');
  const magician2 = {
    name: 'magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }
  expect(magician1).toEqual(magician2);
})

test('test of daemon', () => {
  const daemon1 = new Daemon('daemon');
  const daemon2 = {
    name: 'daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }
  expect(daemon1).toEqual(daemon2);
})

test('test of undead', () => {
  const undead1 = new Undead('undead');
  const undead2 = {
    name: 'undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }
  expect(undead1).toEqual(undead2);
})

test('test of zombie', () => {
  const zombie1 = new Zombie('zombie');
  const zombie2 = {
    name: 'zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }
  expect(zombie1).toEqual(zombie2);
})