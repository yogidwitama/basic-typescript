describe('Array ReadOnly', function () {
    it('should same with java script', function () {
        const names: string[] = ["yogi", "dira", "ade", "mei"];
        const values: number[] = [1, 2, 3, 4];

        console.info(names);
        console.info(values);
    });
    it('should support readonly array', function () {
        const hobbies: ReadonlyArray<string> = ["Membaca", "menulis"];
        console.info(hobbies);
        
        
        // error trigger
        // hobbies[0] = "Main Game";
    })
})