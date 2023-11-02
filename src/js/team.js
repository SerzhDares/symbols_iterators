import { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from './app';

export default class Team {
    
    static charactersArray = [
        new Magician('Маг'),
        new Bowerman('Лучник'),
        new Swordsman('Мечник'),
        new Daemon('Демон'),
        new Undead('Нежить'),
        new Zombie('Зомби'),
    ];

    [Symbol.iterator] = function() {

        let current = 0;
        let last = this.charactersArray.length - 1;

        return {
            next() {
                if(current <= last) {
                    current++;
                    return {
                        done: false,
                        value: current,
                    }
                }

                return {
                    done: true,
                    value: undefined,
                }
            }
        }
    }
}
