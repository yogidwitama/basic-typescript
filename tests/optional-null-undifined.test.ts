describe('Optional Parameter', () => {
    it('should support null and defined', () => {
        function sayHello(name?: string| null) {
            if (name) {
                console.info(`Hello ${name}`);
            } else {
                console.info("Hello")
            }
        }
        sayHello("Yogi");
        const name:string|undefined=undefined;
        sayHello(name);
        sayHello(null);

    })
});