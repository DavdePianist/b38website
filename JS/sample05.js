//EXTERNAL JAVASCRIPT
//data type 1
console.log("Display information in browser console")
var ref=document.getElementById("demo1")
var ref2=document.getElementById("demo2")
//using the var
//variable declaration using var
var value1="234"
let val1="1200"
let val2="4500"
let greet="welcome to JS HOT classes"
let value40
console.log(value40)

let value50= null
console.log( value50)
//ref.innerHTML=val1+val2
//ref2.innerHTML=parseInt(val1)+parseInt(val2)
console.log(greet.length)
//ref.innerHTML="<h3>"+greet+"</h3>"
//ref2.innerHTML=greet.length

//got item at a position using then
//chartAt() string method
console.log(greet.charAt(3))
console.log(greet.charAt(4))
console.log(greet.charAt(5))
console.log(greet.charAt(6))

//Join two strings together using the concat () method
var string1="Welcoome to class" ;
var string2="WebDesign" ;

var x = string1.concat(string2)

//string searching methods
//search
let text1="the quick brown fox"
//let res=text1.search("FOX")

function chk(){
let data1=document.getElementById('text1').value
let data2=document.getElementById('text2').value
let res = data1.seacrch(data2)
if(res != -1)
{
ref.innerHTML= res
ref2.innerHTML= "Item was FOUND"
}
else{
    ref.innerHTML= res
ref2.innerHTML="Item was NOT FOUND"
}
}