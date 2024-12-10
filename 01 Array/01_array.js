class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
       return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    
    shiftItems(index) {
        for(let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }

}

const myArr = new MyArray();
myArr.push(2);
myArr.push(4);
myArr.push(6);
myArr.push(8);
// console.log(myArr.pop());
console.log(myArr.delete(0));

console.log('Myarray', myArr);