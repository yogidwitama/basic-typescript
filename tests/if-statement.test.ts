describe('If statement', () => {
    it("should support in typescript", () => {
        const exampValue = 90;

        if (exampValue > 80) {
            console.info("Good")
        } else if (exampValue > 60) {
            console.info("Okay")
        } else {
            console.info("HA HA HA")
        }
    })
});