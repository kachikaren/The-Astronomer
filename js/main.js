// Global Context & Function Context
function c() {
	var myVar = 3
	a();
	console.log(myVar); //3
}

function b() {
	var myVar;
	console.log(myVar); // Undefined
} 

function a() {
	var myVar =2;
	b();
	console.log(myVar); // 2
}

var myVar =1;
a();
c();
console.log(myVar); //
