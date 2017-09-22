//TYPEOF:

var d = [];
console.log(typeof d); //weird
console.log(Object.prototype.toString.call(d));


//var e = new Person(‘Jane’);
console.log(typeof d);
//console.log(e instanceof Person);


console.log(typeof undefined);
console.log(typeof null); //seen bug for ever

var z = function() {};
console.log(typeof z);

//STRICTMODE:
//you must clear type's object
//use strict can be used globaly or private
function logNewPerson() {
  "use strict";
  var person2;
  persom2 = {};
  console.log(persom2);
}


var person;
persom = {};
console.log(persom);
logNewPerson();