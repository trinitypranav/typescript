class Account {
    //properties - in transpiled/ JS code, these declarations will be removed
    readonly id:number; // set only in constructor. Throws error if we try to update it anywhere else
    owner:string;
    balance:number;
    nickname?:string; // optional property set using '?' operator

    //special function to initialize properties of an object
    constructor(id:number, owner:string, balance:number){
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    //instance methods - part of objects created using this class
    deposit(amount:number){
        if(amount<0) throw new Error('Inavlid Amount');

        this.balance += amount;
    }

}

let account = new Account(1,'pranav',5000); // keyword 'new' initialized a new object and 'this' points to it
account.deposit(10000);
console.log(typeof account); // object
console.log(typeof Account); // function
console.log(account instanceof Account); // true
