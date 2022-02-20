/* Grasshopper - Bug Squashing
Terminal game bug squashing
You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

You are using a library that already has the functions below. Create a function named main that calls the functions in the proper order.

- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move
 */
const rollDice = () => log.push('rollDice')
const move = () => log.push('move')
const combat = () => log.push('combat')
const getCoins = () => log.push('getCoins')
const buyHealth = () => log.push('buyHealth')
const printStatus = () => log.push('printStatus')


const health = 100
const position = 0
const coins = 0
const log = []

const main = () => {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}

// TESTS - run the following command to test this file:
// npm run test -- JS3-Week1/Grasshopper_Bug_Squashing.js

test('Grasshopper - Bug Squashing', () => {
    expect(main).not.toThrow();
    expect(log[0]).toBe('rollDice');
    expect(log[1]).toBe('move');
    expect(log[2]).toBe('combat');
    expect(log[3]).toBe('getCoins');
    expect(log[4]).toBe('buyHealth');
    expect(log[5]).toBe('printStatus');
  });
  