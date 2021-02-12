const district =['madurai','dindigul','covai','theni','selam'];
console.log(district);
console.log(district.pop());
console.log(district);
district.pop();
console.log(district);

var student ={
    0:'Rakhav',1:'pravin',2:'mohan',3:'raj',length: 4
};
console.log(student);
var poped= Array.prototype.pop.call(student);
console.log(student);
console.log(poped);