class BackstagePass extends Item {
    tick() {
        this.sellIn--;

        if (this.sellIn < 0) {
            this.quality = 0;
        } else if (this.sellIn < 5) {
            this.quality = this.quality + 3;
        } else if (this.sellIn < 10) {
            this.quality = this.quality + 2;
        } else {
            this.quality = this.quality + 1;
        }
    }
}