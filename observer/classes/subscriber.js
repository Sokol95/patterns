class Subscriber {
    constructor(name) {
        this._name = name;
        this.publisherValue = null;
    }

    get name() {
        return this._name;
    }

    updateValueFromPublisher = (data) => {
        console.log(`Subscriber ${this.name} got value ${data} from Publisher`);
        this.publisherValue = data;
    }
}

export default Subscriber;
