import { Gameboard } from "../src/gameboard.js";
import { Ship } from "../src/ship.js";

describe('ship class test', () => {
    const cruisorShip = new Ship("Cruisor ship", 4);

    test('ship obj initialized testing', () => {
        expect(cruisorShip.name).toBe("Cruisor ship");
        expect(cruisorShip.length).toBe(4);
        expect(cruisorShip.hits).toBe(0);
    });
})


describe('Gameboard class test', () => {

    const board = new Gameboard();

    test('board initialed obj testing', () => {
        expect(board.x).toBe(10);
        expect(board.y).toBe(10);
    })

    test('place ship test', () => {
        const ship1 = new Ship("Cruisor ship", 4);
        expect(board.placeShip(2,2,false,ship1)).toBe();
        
    })
    
})