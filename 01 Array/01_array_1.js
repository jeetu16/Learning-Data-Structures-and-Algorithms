class NewArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        const lastItemIndex = this.length;
        this.data[lastItemIndex] = item;
        this.length++;

        return lastItemIndex;
    }
    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem
    }

    delete(index) {
        delete this.data[index];
        this.shiftItems(index);
        this.length--;
    }

    shiftItems(index) {
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
    }

}

const newArr1 = new NewArray();

newArr1.push('Hi');
newArr1.push('How');
newArr1.push('are');
newArr1.push('you');
newArr1.push('?');

// newArr1.delete(1);
console.log(newArr1.get(4));

console.log(newArr1.pop());
console.log(newArr1.pop());

console.log(newArr1);
