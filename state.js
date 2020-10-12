class Light {
    constructor(light) {
        this.light = light;
    }
}

class RedLight extends Light {
    constructor() {
        super("red");
    }

    lightOn() {
        return "STOP";
    }
}

class YellowLight extends Light {
    constructor() {
        super("yellow");
    }

    lightOn() {
        return "READY";
    }
}

class GreenLight extends Light {
    constructor() {
        super("green");
    }

    lightOn() {
        return "GO!";
    }
}

class TrafficLight {
    constructor() {
        this.states = [new RedLight(), new YellowLight(), new GreenLight()];
        this.current = this.states[0];
    }

    change() {
        const total = this.states.length;
        let index = this.states.findIndex((item) => item === this.current);

        if ((index + 1) < total) {
            this.current = this.states[index + 1];
        } else {
            this.current = this.states[0];
        }
    }

    lightOn() {
        return this.current.lightOn();
    }
}

const traffic = new TrafficLight();
console.log(traffic.lightOn());
traffic.change();

console.log(traffic.lightOn());
traffic.change();

console.log(traffic.lightOn());
traffic.change();

console.log(traffic.lightOn());
traffic.change();

console.log(traffic.lightOn());
traffic.change();

console.log(traffic.lightOn());
traffic.change();

console.log(traffic.lightOn());
