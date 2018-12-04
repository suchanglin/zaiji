var a = [];
var b = a;
b[0] = 1;
console.log(a[0])
console.log(b[0])
console.log(a === b)

--------------------------------复杂对象，采用指针，改变相互受影响

10 + 'objects'     拼接
'7' * '4'     28
1 - 'x' //转化不了:NaN
1 + {}   拼接
true + true   2
2 + null   2

----------------------------------------------隐形转换

var a = 2
var obj = {
	x: 1,
	y: {
		z: 2
	}
}
var n = [obj, 3, [4, 5]]
console.log(a << 2)  // 8
console.log(obj['y'].z)  // 2
console.log(n[0].y['z'])  // 2
console.log(n[2]['1']) // 5
delete n[0]   
console.log(n[0].x)   // 报错


------------------------------------------------------------- 对象取值规则

var x = 10
var y = 20
var z = x < y ? x++ : ++y;  

--------------------------------------- z: // 10  先取值再自加

var age = 20;
var name;
if (age > 20 && name.length > 0) {
	console.log(1)
} else {
	console.log(2)
}

-----------------------------------------  懒惰运算

var x = 'g';

1.function test() {
	var x = 'l'
	return x;
}
console.log(test())  // 'l'函数作用于优先


2.function test() {
	console.log(x)  // undefined  函数提升
	var x = 10
	console.log(x)  // 10
}
test()


3. function test() {
	var sum = 0;
	for (var i = 0; i < 10; i++) {
		sum += i;
	}
	console.log(sum);  // 45
	console.log(i);  // 10
}
test()

----------------------------------------------------------------------
var x = 'g'

function test() {
	console.log(x)
	var x = 'l'
	console.log(x)
}
test()
-----------------------------------------------------------

var f = function(x) {
	return x * x
}
console.log(f)
console.log(f(10))
------------------------------------------------------------------------

function f() {
	console.log('function');
}

function test() {

	console.log(f)
	f()
	f = 'hello'
	console.log(f)
	f()   
}
test()
-------------------------------------------------------------------------

function print(arr) {

	for (var i in arr) {
		if (arr[i] instanceof Array) {
			print(arr[i])
		} else {
			document.write(arr[i] + '')
		}
	}
}
var data = [1, [20, 21],
	[
		[11, 11],
		[22, 22]
	]
];

print(data);
