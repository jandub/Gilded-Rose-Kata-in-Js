class Item {
    constructor(quality, sellIn) {
        this.quality = quality;
        this.sellIn = sellIn;
    }

    set quality(quality) {
        if (quality < 0) {
            quality = 0;
        }

        if (quality > 50) {
            quality = 50;
        }

        this._quality = quality;
    }

    get quality() {
        return this._quality;
    }

    tick () {}
}