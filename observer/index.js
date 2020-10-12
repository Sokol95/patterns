import {
    Publisher,
    Subscriber,
} from './Classes/index';

const runObserverExample = () => {
    const publisher = new Publisher('Publisher1');

    const subscriber1 = new Subscriber('Subscriber1');
    const subscriber2 = new Subscriber('Subscriber2');
    const subscriber3 = new Subscriber('Subscriber3');

    publisher.subscribe(subscriber1, subscriber1.updateValueFromPublisher);
    publisher.subscribe(subscriber2, subscriber2.updateValueFromPublisher);
    publisher.subscribe(subscriber3, subscriber3.updateValueFromPublisher);

    publisher.fire('FIRE', 'valueFromPublisher - 1');
    publisher.fire('NOT_FIRE', 'valueFromPublisher - 2');
};

export default runObserverExample;
