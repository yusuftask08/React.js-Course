const user = {
    name: "yusuf taskiran",
    email: "yusuftask@gmail.com",
    city: "İstanbul",
    roles: ['admin', 'customer'],
    getRoles: function() {
        const that = this;
        this.roles.forEach((role) => {
            console.log(role)
        })
    }
}

user.getRoles()

const addES5 = function() {
    console.log(arguments)
}

addES5(5, 10)