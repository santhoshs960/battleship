export class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.hits = 0;
    }

    hit() {
        if (this.hits >= this.length) return false;

        this.hits++
        return true;
    }

    isSunk() {
        if (this.length !== this.hits) return false;

        return true;
    }

}