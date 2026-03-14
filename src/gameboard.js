export class Gameboard {
    constructor() {
        this.x = 10;
        this.y = 10;
        this.occupiedCoor = [];
        this.missedCoor = [];
    }

    placeShip(initx, initY, isVertical, ship) {
        if (initx > this.x || initY > this.y) return "Out of bound co-ordinate!";
        const coordinates = this.#calculateCoordinate(2,2,isVertical,2);

        const format = { 
            grid: coordinates,
            ...ship
        }

        return format;
    }

    #calculateCoordinate(initx, inity, isVertical, shipLength) {
        const coordinate = [];

        for (let i=0;i<shipLength;i++){
            const arr = [];
        
            if (!isVertical){
                arr.push(initx+i);
                arr.push(inity);
            } else {
                arr.push(initx);
                arr.push(inity-i);
            }

            coordinate.push(arr);
        }

        return coordinate;
    }

    receiveAttack(x, y) {

    }
}