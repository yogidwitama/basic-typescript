describe('Data Type', function () {
    it('should must declare', function () {
        let name: string = "Yogi Dwitama";
        let balance: number = 100000;
        let isVip: boolean = true;

        console.info(name);
        console.info(balance);
        console.info(isVip);


        // code bawah akan error
        // name = 100;
        // balance = "10000";
        // isVip =100 ;

    })
}

)