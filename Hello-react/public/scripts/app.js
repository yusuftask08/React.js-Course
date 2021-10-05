"use strict";

var user = {
  name: "yusuf taskiran",
  email: "yusuftask@gmail.com",
  city: "İstanbul",
  roles: ['admin', 'customer'],
  getRoles: function getRoles() {
    var that = this;
    this.roles.forEach(function (role) {
      console.log(role);
    });
  }
};
user.getRoles();

var addES5 = function addES5() {
  console.log(arguments);
};

addES5(5, 10);
