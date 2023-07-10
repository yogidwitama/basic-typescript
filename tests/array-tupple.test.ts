describe('Array ReadOnly', function () {
    it('should support tuple', function () {
        const person: readonly [string, string, number] = ["yogi", "dwitama",25];
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);

        // person[0]="Budi";

    });
})