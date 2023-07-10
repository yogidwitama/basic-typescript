describe('Union Type', () => {
    it("should support in typescript", function () {
        let sample: number | string | boolean = "yogi";
        console.info(sample);

        sample = 100;
        console.info(sample);

        sample = true;
        console.info(sample);

    })
})
