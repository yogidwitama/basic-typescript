describe('For Loop', () => {
    it("should support for loop", () => {
        const names: string[] = ["Yogi", "Dwitama", "telolet"];
        for (let i = 0; i < names.length; i++) {
            console.info(names[i])
        };
        for (const name of names) {
            console.info(name)
        };
        for (const index in names) {
            console.info(names[index])
        }
    })
});