class User{
    constructor(first, last, credit){
        this.first = first;
        this.last = last;
        this.credit = credit
    }

    getFullname(){
        return `${this.first} ${this.last}`
    }

    editName(newname){
        const myname = newname.split(' ')
        this.first = myname[0]
        this.last = myname[1]
    }

}

const john = new User('John', 'Doe', 34);
console.log(john.getFullname())
