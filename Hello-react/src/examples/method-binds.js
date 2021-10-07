const user = {
    name: 'yusuf',
    getUserName() {
        return this.name;
    }
}

console.log(user.name)

const myFunc = function(){
    console.log(this);
}
myFunc();