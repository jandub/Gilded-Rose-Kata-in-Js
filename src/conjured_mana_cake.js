class ConjuredManaCake extends Item {
    tick() {
        this.sellIn--;

        if (this.sellIn > 0) {
            this.quality = this.quality - 2;
        } else {
            this.quality = this.quality - 4;
        }
    }
}