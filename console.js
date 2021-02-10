console.log('Rakhav');//Mainly used to log(print) the output to the console
console.log(123);
console.log(true);
console.log([1,3,6,2,232,4543,2342,3]);
console.log({a:3,b:5,c:9});
console.log(undefined);

console.error("This is a simple erroe");//Used to log error message to the console.
console.error("customer error");

console.warn("This is a warning");//Used to log warning message to the console.
console.warn("customer warning");

//console.clear();//Used to clear the console. 

console.time('abc');//Whenever we want to know the amount of time spend by a block or a function.
let fun = function()//They take a label which must be same, and the code inside can be anything( function, object, simple console).
{	console.log("fun is running");
}
let fun2 = function(){
	console.log("fun2 is running");
}
fun();
fun2();
console.timeEnd('abc');

console.table({'a':43,'b':21});//his method allows us to generate a table inside a console.

for(let i=0;i<30;i=i+3){
	console.count(i);//This method is used to count the number that the function hit by this counting method.
}

console.group('asdf');//group() and groupEnd() methods of the console object allows us to group contents in a separate block, which will be indented
	console.warn("warning");
	console.error("error");
	console.log("Nilakottai");
console.groupEnd('asdf');
console.log('Correct');

const spacing = '10px'; //User can add Styling to the console logs in order to make logs Custom . The Syntax for it is to add the css styling as a parameter to the logs which will replace %c in the logs as shown in the example below .
const styles =  `padding:${spacing};
				background-color:white;
				color:green;
				font-style:italic;
				border:1px solid black;
				font-size:2em;`;
console.log("%c Rakhavendra",styles);

console.info('error');

