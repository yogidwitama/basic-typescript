describe('If statement Switch Statement', () => {
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
    it("should support tennary operator in typescript", () => {
        const value = 80;
        const say = value >= 75 ? "good" : "hahaha";
        console.info(say);
    })
    it("should support switch statement in typescript", () => {
        const sayHello = (name: string): string => {
            switch (name) {
                case "Yogi":
                    return "Hi Yogi";
                case "Roger":
                    return "Hi Roger"
                default:
                    return "Hello"
            }
        }
        console.info(sayHello("Yogi"));
        console.info(sayHello("Roger"));
    })
});