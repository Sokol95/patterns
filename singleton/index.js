class Counter {
    count = 0
    constructor() {
        if (typeof Counter.instance === 'object') {
            return Counter.instance
        }
        Counter.instance = this
        return Counter.instance
    }

    getCounter() {
        return this.count
    }

    incCounter() {
        this.count++
    }
}

let a = new Counter()
let b = new Counter()

a.incCounter()
b.incCounter()

console.log(a === b) // true
console.log(a.getCounter() === b.getCounter()) // true
