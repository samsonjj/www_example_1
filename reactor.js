/**
 * 
 * @param {string} s 
 * @returns {HTMLElement}
 */
const $ = (s) => document.querySelector(s);

class Reactor {
    constructor() {
        this.power = 1000;
        this.temperature = 
        this.rods = 100;
        this.turbine_speed = 0;

        this.BASE_REACTIVITY = 1.1;

        /**
         * @param {KeypressEvent} event
         */
        const keypressHandler = (event) => {
            switch (event.code) {
                case "KeyJ":
                    this.rods += 1;
                    break;
                case "KeyK":
                    this.rods -= 1;
                    break;
                case "KeyH":
                    this.rods -= 10;
                    break;
            }
        };
        addEventListener("keypress", keypressHandler);
    }

    step() {
        // this.power *= .98; // turbine draw, e.g. energy disipation
        this.power *= this.BASE_REACTIVITY;                        // reactor exponential growth
        this.power += -1.0 * (this.rods * .001 * this.power);   // rods
    }

    render() {
        console.log('rendering');
        $(".info#power").innerHTML = this.power;
        $(".info#rods").innerHTML = this.rods;

        if (this.power > 3500) {
            $("#reactor").style.background = "red";
        }
    }
}

const reactor = new Reactor();
reactor.render();
setInterval(() => {
    reactor.step();
    reactor.render();
}, 500);