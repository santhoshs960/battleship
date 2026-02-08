import { Ship } from "../src/ship.js";

describe('ship class test', () => {
    const cruisorShip = new Ship("Cruisor ship", 4);
    
    test('ship obj initialized testing', () => {
        expect(cruisorShip.name).toBe("Cruisor ship");
        expect(cruisorShip.length).toBe(4);
        expect(cruisorShip.hits).toBe(0);
    })
})