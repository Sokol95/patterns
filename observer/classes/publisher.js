class Publisher {
    constructor(name){
        this._name = name;
        this.subscribers = new Map();
    }

    subscribe(subscriber, method) {
        if(!subscriber || !method) {
            return;
        }

        this.subscribers.set(subscriber, method);
    }

    get name() {
        return this._name;
    }

    fire(event, data) {
        console.log('Publisher ', this.name, ' fired event ', event);

        [...this.subscribers].forEach(item => {
            const subscriber = item[0];
            const method = item[1];

            console.log( `Publisher, ${this.name} subscriber ${subscriber.name} ${event} ${data}`);
            method(data);
        })
    }
}

export default Publisher;
