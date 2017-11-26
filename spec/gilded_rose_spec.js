describe ('Gilded Rose', () => {

    describe ('normal Items', () => {

        it ('updates normal items before sell date', () => {
            let gildedRose = new Shop([['normal', 10, 5]]);
            let items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(9);
            expect(items[0].sellIn).toEqual(4);
        });

        it ('updates normal items on the sell date', () => {
            let gildedRose = new Shop([['normal', 10, 0]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(8);
            expect(items[0].sellIn).toEqual(-1);
        });

        it ('updates normal items after the sell date', () => {
            let gildedRose = new Shop([['normal', 10, -5]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(8);
            expect(items[0].sellIn).toEqual(-6);
        });

        it ('updates normal items with a quality of 0', () => {
            let gildedRose = new Shop([['normal', 0, 5]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(0);
            expect(items[0].sellIn).toEqual(4);
        });

    });


    describe ('Brie Items', () => {

        it ('updates Brie items before the sell date', () => {
            let gildedRose = new Shop([['Aged Brie', 10, 5]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(11);
            expect(items[0].sellIn).toEqual(4);
        });

        it ('updates Brie items before the sell date with maximum quality', () => {
            let gildedRose = new Shop([['Aged Brie', 50, 5]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(50);
            expect(items[0].sellIn).toEqual(4);
        });

        it ('updates Brie items on the sell date', () => {
            let gildedRose = new Shop([['Aged Brie', 10, 0]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(12);
            expect(items[0].sellIn).toEqual(-1);
        });

        it ('updates Brie items on the sell date, near maximum quality', () => {
            let gildedRose = new Shop([['Aged Brie', 49, 0]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(50);
            expect(items[0].sellIn).toEqual(-1);
        });

        it ('updates Brie items on the sell date with maximum quality', () => {
            let gildedRose = new Shop([['Aged Brie', 50, 0]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(50);
            expect(items[0].sellIn).toEqual(-1);
        });

        it ('updates Brie items after the sell date', () => {
            let gildedRose = new Shop([['Aged Brie', 10, -10]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(12);
            expect(items[0].sellIn).toEqual(-11);
        });

        it ('updates Briem items after the sell date with maximum quality', () => {
            let gildedRose = new Shop([['Aged Brie', 50, -10]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(50);
            expect(items[0].sellIn).toEqual(-11);
        });

    });


    describe ('Sulfuras Items', () => {

        it ('updates Sulfuras items before the sell date', () => {
            let gildedRose = new Shop([['Sulfuras, Hand of Ragnaros', 10, 5]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(10);
            expect(items[0].sellIn).toEqual(5);
        });

        it ('updates Sulfuras items on the sell date', () => {
            let gildedRose = new Shop([['Sulfuras, Hand of Ragnaros', 10, 0]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(10);
            expect(items[0].sellIn).toEqual(0);
        });

        it ('updates Sulfuras items after the sell date', () => {
            let gildedRose = new Shop([['Sulfuras, Hand of Ragnaros', 10, -1]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(10);
            expect(items[0].sellIn).toEqual(-1);
        });

    });


    describe ('Backstage Passes', () => {

        it ('updates Backstage pass items long before the sell date', () => {
            let gildedRose = new Shop([['Backstage passes to a TAFKAL80ETC concert', 10, 11]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(11);
            expect(items[0].sellIn).toEqual(10);
        });

        it ('updates Backstage pass items close to the sell date', () => {
            let gildedRose = new Shop([['Backstage passes to a TAFKAL80ETC concert', 10, 10]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(12);
            expect(items[0].sellIn).toEqual(9);
        });

        it ('updates Backstage pass items close to the sell data, at max quality', () => {
            let gildedRose = new Shop([['Backstage passes to a TAFKAL80ETC concert', 50, 10]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(50);
            expect(items[0].sellIn).toEqual(9);
        });

        it ('updates Backstage pass items very close to the sell date', () => {
            let gildedRose = new Shop([['Backstage passes to a TAFKAL80ETC concert', 10, 5]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(13);
            expect(items[0].sellIn).toEqual(4);
        });

        it ('updates Backstage pass items very close to the sell date, at max quality', () => {
            let gildedRose = new Shop([['Backstage passes to a TAFKAL80ETC concert', 50, 5]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(50);
            expect(items[0].sellIn).toEqual(4);
        });

        it ('updates Backstage pass items with one day left to sell', () => {
            let gildedRose = new Shop([['Backstage passes to a TAFKAL80ETC concert', 10, 1]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(13);
            expect(items[0].sellIn).toEqual(0);
        });

        it ('updates Backstage pass items with one day left to sell, at max quality', () => {
            let gildedRose = new Shop([['Backstage passes to a TAFKAL80ETC concert', 50, 1]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(50);
            expect(items[0].sellIn).toEqual(0);
        });

        it ('updates Backstage pass items on the sell date', () => {
            let gildedRose = new Shop([['Backstage passes to a TAFKAL80ETC concert', 10, 0]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(0);
            expect(items[0].sellIn).toEqual(-1);
        });

        it ('updates Backstage pass items after the sell date', () => {
            let gildedRose = new Shop([['Backstage passes to a TAFKAL80ETC concert', 10, -1]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(0);
            expect(items[0].sellIn).toEqual(-2);
        });

    });


    describe ('Conjured Items', () => {

        it ('updates Conjured items before the sell date', () => {
            let gildedRose = new Shop([['Conjured Mana Cake', 10, 10]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(8);
            expect(items[0].sellIn).toEqual(9);
        });

        it ('updates Conjured items at zero quality', () => {
            let gildedRose = new Shop([['Conjured Mana Cake', 0, 10]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(0);
            expect(items[0].sellIn).toEqual(9);
        });

        it ('updates Conjured items on the sell date', () => {
            let gildedRose = new Shop([['Conjured Mana Cake', 10, 0]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(6);
            expect(items[0].sellIn).toEqual(-1);
        });

        it ('updates Conjured items on the sell date at 0 quality', () => {
            let gildedRose = new Shop([['Conjured Mana Cake', 0, 0]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(0);
            expect(items[0].sellIn).toEqual(-1);
        });

        it ('updates Conjured items after the sell date', () => {
            let gildedRose = new Shop([['Conjured Mana Cake', 10, -10]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(6);
            expect(items[0].sellIn).toEqual(-11);
        });

        it ('updates Conjured items after the sell date at zero quality', () => {
            let gildedRose = new Shop([['Conjured Mana Cake', 0, -10]]);
            let items = gildedRose.updateQuality();
            
            expect(items[0].quality).toEqual(0);
            expect(items[0].sellIn).toEqual(-11);
        });
    });
});
