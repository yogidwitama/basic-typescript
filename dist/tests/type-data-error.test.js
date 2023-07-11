"use strict";
describe('Data Type', function () {
    it('should must declare', function () {
        let name = "Yogi Dwitama";
        let balance = 100000;
        let isVip = true;
        console.info(name);
        console.info(balance);
        console.info(isVip);
        // code bawah akan error
        // name = 100;
        // balance = "10000";
        // isVip =100 ;
    });
});
