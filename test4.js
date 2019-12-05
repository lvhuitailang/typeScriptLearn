var v1 = 1; //数字
var v2 = "I'm a string!"; //字符串
var v3 = true; //布尔
var v4 = [1, 2, 3]; //数字数组
var v5 = ['1', '2']; //字符串数组
var v6 = ['haha', 1]; //任意数组
var v7 = ['a', 1, { name: 'wolfie' }]; //任意
var v8 = ['wolfie', 19]; //元祖
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Black"] = 2] = "Black";
})(Color || (Color = {})); //枚举
var c = Color.Green;
var v9;
var v10;
var v11;
console.log('v1:' + v1);
console.log('v2:' + v2);
console.log('v3:' + v3);
console.log('v4:' + v4);
console.log('v5:' + v5);
console.log('v6:' + v6);
console.log('v7:' + v7);
console.log('v8:' + v8);
console.log(c);
console.log('v9:' + v9);
console.log('v10:' + v10);
console.log('v11:' + v11);
