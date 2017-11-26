class Shop {
    constructor(items = []) {
        this.items = [];

        for (let [name, quality, sellIn] of items) {
            if (!!this.itemLookup[name]) {
                this.items.push(new this.itemLookup[name](quality, sellIn));
            } else {
                this.items.push(new NormalItem(quality, sellIn));
            }
        }
    }

    get itemLookup() {
        return {
            'Aged Brie': AgedBrie,
            'Backstage passes to a TAFKAL80ETC concert': BackstagePass,
            'Sulfuras, Hand of Ragnaros': Sulfuras,
            'Conjured Mana Cake': ConjuredManaCake
        };
    }

    updateQuality() {
        for (let item of this.items) {
            item.tick();          
        }

        return this.items;
    }
}
