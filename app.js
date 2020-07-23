///chap1

//tasks

alert("wellcome to coding in Javascript")




alert("Wellcome to Javascript Land..." + "\nHappy Coding")
      
      

//chap MathExpression



//task1
//var no1=+prompt("Enter First no")
//var no2=+prompt("Enter second no")
//var add;
//document.write("Sum is ", no1+no2)

//task3




//var a;
//document.write("Value of variable is undefined ");
//a=5;
//document.write("<br>Initial value is ",a);
//a++;
//document.write("<br> Value after increament is ", a);
//var b=7;
//var c=a+b;
//document.write("<br> Sum after addition is ",c)
//c--;
//document.write("<br> Sum after decreament ",c)
//d=c/3;
//document.write("<br> The remainder is ",d)





//task4

//
//var a="600";
//document.write(" The total cost for buying five tickets are ", a*5 +"PKR")



//task5

//
//document.write("<br>Table of 20")
//for(var i=1;i<=10;i++){
//    
//    document.write( "<br> 20 " + " x "+ i + "=" + 20*i )
//    
//}



//task 8

//
//var T="850";
//var O="645";
//document.write("Total Marks = ",T)
//document.write("<br>Obtained Marks = ", O)
//var p= O*100/T
//document.write("<br>Your Percentage is ", p + "%")

///task9


//var us="159";
//var r="42.5";
//var s="159"*10;
//var r="42.5"*10;
//document.write("Total Currency in Pkr = ",s+r);


//task7



//
//var price1="650";
//var price2="100";
//var q1="3";
//var q2="7";
//var ship="100"
//var cost=q1*price1;
//var quan=q2*price2;
//var total=cost+quan+(+ship);
//
//
//document.write("The price of item 1 is = ",price1);
//document.write("The price of item 2 is = ",price2);
//document.write("The quantity of item 1 is = ",q1);
//document.write("The quantity of item 2 is = ",q2);
//document.write("The total amount is = ", total);















//task10

//
//var n="15"
//var o=+(n+5)*10/2;
//document.write(o);

////or
//var n="15";
//var o=+(n+5);
//var p=n*10;
//var q=p/2;
//document.write(o,p,q)







//task11
//
//var thisyear="2020";
//var birthy="1999";
//var age=thisyear-birthy;
//document.write("your age is ", age)



//task6

//var cels="25";
//var fah=(cels*9/5)+32;
//document.write("the celcius temp in feh is ",fah)











//Assignment6_______________________________________________________________



////task1--
//var a=+prompt("Please enter a number")
//document.write("<br>Value of a is ",a);
//++a;
//document.write("<br>Value of a is ",a);
//document.write("<br> Now  Value of a is ",a)
//a++
//document.write("<br> Now  Value of a++ is ",a);
//--a;
//document.write("<br> Now  Value of --a is ",a);
//a--
//document.write("<br> Now  Value of a-- is ",a);


//task2----------

//
//var a=2
//var b=1;
//
//--a;
//--a - --b;
//--a - --b + ++b;
//--a - --b + ++b + b--;
//document.write(a,b)






//task5----

//
//var a=prompt("Enter a num which you need multiplication table")
//for(var i=1;i<=10;i++){
//    document.write("<br>")
//    document.write(a+"x"+i+"=",a*i)
//}
//if(a==null){
//    document.write(5+"x"+i+"=",5*i)
//}


//task6


var a=prompt("Enter name of First Subject")
var b=prompt("Enter name of Second Subject")
var c=prompt("Enter name of Third Subject")

var d=+prompt("Enter marks obtained for first subject")
var e=+prompt("Enter marks obtained for second subject")
var f=+prompt("Enter marks obtained for third subject")
var per1=d*100/100;
var per2=e*100/100;
var per3=f*100/100;
document.write("<b>Subject"+"<nbsp><b> Total Marks"+"<nbsp><b> Obtained Marks"+"<nbsp><b> Percentage")
document.write("<br>")
document.write(a+"&nbsp&nbsp&nbsp&nbsp"+ "100","&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp",d,"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp",per1+"%")
document.write("<br>")
document.write(b +"&nbsp&nbsp&nbsp&nbsp"+"100"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp",e,"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp",per2+"%")
document.write("<br>")
document.write(c+"&nbsp&nbsp&nbsp&nbsp"+"100"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp",f,"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp",per3+"%")

var total="300"
var obtained=d+e+f
var totalper=obtained*100/total;
document.write("<br>")
document.write("Total marks=",total)
document.write("<br>")
document.write("Obtained =",obtained)
document.write("<br>")
document.write("Total percentage=",totalper+"%")

////chap Array and Loop





var a

for(var i=1;i<4;i+1){
    for(var j=0;j<i;j++)
    document.write(i)
    
}
//for(var j=1;j<i;j+1){
//    document.write(a[j])
//    
//    
//}












//chap Variables



//Assigment 2______________________________


//var username;
//var myName="AfaqueAhmed";
//var message="Hello World";
//
//alert(message);

//
//var name="Afaque Ahmed";
//var age="15 years Old";
//var prof="Certified Mobile App Developer";
//alert(name);
//alert(age);
//alert(prof);


//
//var msg="PIZZA"
//alert("PIZZA\nPIZZ\nPIZ\nPI\nP")

//
//var email="ahmedafaq554@gmail.com"
//alert("My email  is "+email)

//document.write("Yah! I can write HTML Content through Javascript")

var val1=+prompt("Enter your first value")
var val2=+prompt("Enter your second value")
var operator=prompt("Enter your Operator")
console.log(val1+operator+val2);
if(operator=="+"){
    document.write( val1+val2);
}
else if(operator=='-'){
    console.log(val1-val2);
}







//chp 3_____________________________________________







//3no Question




var VisitorName= " Ali";
var ProductTitle= " TShirts";
var Quantiy= " 5 ";

document.write( VisitorName + " have ordered " + Quantiy + ProductTitle);








//Legal Variables

var ali_am;
var sam;
var $ali;
var ali12;
var afaqAhmed;

//illegal Variables


var this;
var af aq;
var 12afaq;
var @ad;









//chap9-11------------------------------------------------------------

//task2

//var a=prompt("Enter the gender");
//if(a=="Male"){
//    document.write("Good Morningdd Sir")
//}
//else if(a=="Female"){
//    document.write("Good Morning Madam")
//}
//else{
//    document.write("uhugufg")
//}


//task5--------------------
//a.
//var a = 4;
//if (++a === 5){
//alert("given condition for variable a is true");
//}
//b   var b = 82;
//if (b++ === 83){
//alert("given condition for variable b is true");
//}
//c       var c = 12;
//if (c++ === 13){
//alert("condition 1 is true");
//}
//if (c === 13){
//alert("condition 2 is true");
//}
//if (++c < 14){
//alert("condition 3 is true");
//}
//if(c === 14){
//alert("condition 4 is true");
//}


//d         
//var materialCost = 20000;
//var laborCost = 2000;
//var totalCost = materialCost + laborCost;
//if (totalCost === laborCost + materialCost){
//alert("The cost equals");
//}
// if (true){
//alert("True");
//}
//if (false){
//alert("False");
//}

//task9
//
//var n=+prompt("Enter any number")
//if(n%2==0){
//    document.write("No is even")
//}
//else{
//    document.write("Number is odd")
//}



//chap12-13-----------------------------------------------------------------



//
//var str1="cmkk"
//var str2="as"
////var n=str1.localeCompare(str2)
////document.write(largest)
//console.log(largest(str1,str2))

//var a=prompt("Insert a string")
//var b=prompt("Insert other string")
//if(a.length>b.length){
//    document.write("The larger is")
//}
//else if(a.length==b.length){
//    document.write("Equal in size")
//}











//task1

//
//var a = prompt("Press any key")
//if(a>=65 && a<96){
//   
//   console.log("The entered key is uppercase letter")
//   }
//    
//if(a>=96 && a<122 ){
//console.log("The entered key is lower case letter")
//      
//   }
//
//else{
//
//console.log("The entered key is number")
//    
//
//
//}



//task3
//
//var a= prompt("Enter any number")
// if(a>0){
//     
//     document.write("It is positive number")
// }
//if(a<=0){
//     
//     document.write("It is negative or Zero number")
// }
//


//task4

//
//var a=prompt("Enter any characater")
//
//
//if (a=='a'|| a=='e' || a=='i' || a=='o' || a=='u'){
//    document.write("vowel")
//}
//else{
//    document.write("cons")
//}
//

//task5
//var b=prompt("Enter your Password")
//if(b==""){
//    document.write("Please  enterd  password")
//
//}
//
//if(b=="Afaque"){
//    document.write("Correct! You enterd correct password")
//}
//else{
//document.write("Wrong! You enterd wrong password")
//    
//}
//

//task6

//
//var greeting=prompt("Enter time"); 
//var hour = "13";
//if (hour < 18) {
//    greeting = "Good day"; 
//                
//               }
//else {
//    greeting = "Good evening"; }



//task 7

var a= prompt("Enter the time in Format like: 0000")

if(a>=0000 && a<1200){
    
    document.write("Good Morning")
}


if(a>= 1200 && a < 1700){

    document.write("Good Afternoon")

    
}

if(a>= 1700 && a < 2100){

    document.write("Good Evening")

    
}

if(a>= 2100 && a <= 2359){

    document.write("Good Night ")

    
}
























//chap 14-16--------------------------------------



//task7
//
//var arr = ["1) SSC","2) HSC","3) BCS","4) BS","5) BCOM","6)MS","7)M.Phil","8)PhD"];
//
//document.write("Qualifications:<br>")
//for(var i=0;i<arr.length;i++){
//console.log(arr[i])
//}




//task8
//var names=["Aafaq","Farhan","Wajid"];
//var score=["344","444","244"];
//var per1=score[0]*100/500;
//var per2=score[1]*100/500;
//var per3=score[2]*100/500;
//document.write("Score of " , names[0] + " is ", score[0]  + " and percentage= " ,per1)
//document.write("<br>"+"Score of " , names[1] + " is ", score[1]  + " and percentage= " ,per2)
//document.write("<br>"+"Score of " , names[2] + " is ", score[2]  + " and percentage= " ,per3)








//task9



//var color=["Red","Green","blue","purple","Orange"];
//document.write(color)
//color.unshift("black");
//document.write("<br>")
//document.write(color)
//color.push("white")
//document.write("<br>")
//document.write(color)
//color.unshift("skyblue","sea green")
//document.write("<br>")
//document.write(color)
//color.shift();
//document.write("<br>")
//document.write(color)
//color.pop();
//document.write("<br>")
//document.write(color)
//color.splice(2,1,"gray")
//document.write("<br>")
//document.write(color)
//color.splice(2,2)
//document.write("<br>")
//document.write(color)


//task11


//
//var color=["karachi","Lahore","Islamabad","Quetta","Peshawar"];
////document.write("<br>")
//document.write(color)
//
//var arr = color.slice(2,4)
//document.write("<br>")
//document.write(arr)




//task12


//
//var arr=["This","is","my","cat"];
//document.write(arr);
//var str="This is My cat"
//document.write(str)







//tassk13

//
//var arr=["Keyboard","Mouse","Printer","monitor"]
//for(var i=0;i<arr.length;i++){
//document.write("<br>"+"Out:",arr[i])}
//
//document.write("<br>"+"Out:",arr[1])
//document.write("<br>"+"Out:",arr[2])
//document.write("<br>"+"Out:",arr[3])}



//task14

//
//var arr=["Keyboard","Mouse","Printer","monitor"];
//for(var  i=arr.length - 1; i>=0; i--){
//document.write(arr[i])
//
//}


//task15


var arr=["Apple", "Samsung", "Motorola", "Nokia", "Sony & Haier"]









//chap 21-25




////task1
//var fname=prompt("Enter your first name");
//var lname=prompt("Enter your last name");
//var sum=fname+lname;
//alert("Wellcome" + sum)
//


//taask2

//var model=prompt("Enter your fav mobile phone")
//var c=model.length
//alert(c)



//task3
//
//var a="Pakistani"
//var b=a.indexOf("n")
//alert(b)



////task4
//var app="Hello World"
//var c=app.lastIndexOf("l")
//alert(c)


//task5
//var a="Pakistani"
//var b=a.charAt(3)
//alert(b)


//task7
//
//var a="Hyderabad"
//
//var c="Islam"+a.slice(5,9)
//alert(c)



//task8

//
//var msg="Ali and Sami are best friends. They play cricket and football together."
//for(var i=0;i<msg.length;i++){
//    
//    if(msg.slice(i,i+3)=== "and"){
//    msg=msg.slice(0,i) + "&" + msg.slice(i+2)
//    msg=msg.slice(0,i) + "&" + msg.slice(i+2)
//
//        alert(msg)
//}
//


//}



//task9
//
//var a=472
//
//console.log(typeof(a))
//
//var c=a.toString()
//console.log(c)
//console.log(typeof(c))




//task 10

//
//var a=prompt("Enter the text")
//document.write(a.toUpperCase())





//task11

//
//var a= prompt("Enter Name of your city")
//var b=a.slice(0,1)
//b=b.toUpperCase()
//var c=a.slice(1)
//
//c=c.toLowerCase()
//
//a=b+c;
//console.log(a)


//task12
//
//var a="35.36"
//var c=a.parseInt()
//console.log(c)







//task 13

//var uname=prompt("Enter user name")
//
//var d=uname.length;
//for(var i=0;i<d;i++){
//
//if(uname.slice(1,4) === "@"){
//    
//    
//    alert("Special Char are not allowed")
//
//
//}
//else{
//    
//alert("UserName Created Successfuly!")
//    
//}}



//task14

//
//var city= prompt('Enter what u wanna search')
//var first=city.slice(0,1)
//first=first.toUpperCase()
//var othr= city.slice(1)
//othr=othr.toLowerCase()
//city= first+othr;
//var f=city.indexOf(ar)
//console.log(city)
//console.log(f)
//var ar=['Chips','Apple','Cookie','Cake']
//for(var i=0;i<ar.length;i++){
//    
//    
//    if(ar[i]==city){
//        alert("Found")
//    }
//    else{
//        alert("Could not found")
//    }
//}
//

//task 16


//
//var uni= "University of Karachi"
//
//var res= uni.split("")
//        document.write(res)



//task17
//
//var r="pakistan"
//var c=r.charAt(r.length-1)
//console.log(c)
//






//task18
//
//var word="the quick brown fox jumps over the lazy  dog"
//
//console.log(word.match(/the/g) ||[]).length
//"the quick brown fox jumps over the lazy dog".split("the").length-1
//






















//chap 26-30    Math Methods










//task1

//var value=prompt("Enter the value")
//var rnd=Math.round(value)
//console.log(rnd)
// var value=prompt("Enter the value")
//var flor=Math.floor(value)
//console.log(flor)

//var value=prompt("Enter the value")
//var cel=Math.ceil(value)
//console.log(cel)

 


//task2
//
//var value=prompt("Enter the value")
//var rnd=Math.round(value)
//console.log(rnd)
//
//
//
//
////task3
//
//
//var rnd= Math.abs(-4)
//console.log("The absoulte value of -4 is ", rnd)









//task4
//
//var rnd= Math.random()*6
//console.log( rnd)








//task5
//
//var head= prompt("Enter the name of head  user")
//
//var tail= prompt("Enter the name of tail  user")
//var toss=Math.random() * 2
//var tss=Math.floor(toss)
//console.log(tss)
//if (toss==0){
//    console.log("The head won the toss")
//}
//else{
//    console.log(tail+"The tail won the toss")
//}







//task6

//
//var rnd= Math.random() * 100
//console.log( rnd)


//task8
//
//var gues= prompt("Guess the word")
//var rnd= Math.random() * 10
//var flor=Math.floor(rnd)
//console.log( flor)
//if(gues==flor){
//    console.log("The guess matched")
//}
//else{
//    console.log("Try again")
//}











//chap 31-34




//task1


//
//var curent= new Date();
//console.log(curent)
//
//
//
//
//
////task2
//
//var curent= new Date();
//var mnth= curent.getMonth()
//console.log(mnth)
//
//
//var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
//var now= new Date(); 
//var get=months[now.getMonth()];
// console.log(get)









//task4
//
//var dys=['Monday','Tues','Wed','Thur','Fri','Sat','Sun']
//var curent= new Date()
//var dy=dys[curent.getDay()]
//console.log(dy)
//
//if(dy=='Sat'|| dy=='Sun'){
//    console.log("It is fun day")
//}


//task5

//var curnt= new Date()
//var dy=curnt.getDate()
//console.log(dy)
//
//if(dy<16){
//    console.log("The First Fifteen Days of the month")
//}
//else{
//    console.log("Last fiften days of the Month")
//}




//task7


//var curnt= new Date()
//var dy=curnt.getHours()
//
//console.log(dy)
//
//if(dy>00 && dy<13){
//    console.log("It is AM")
//}
//else{
//    console.log("It is PM")
//}



//task9
//
//var dys= new Date("Jun 25, 2019")
//
//var today= new Date()
//var ds= today.getDate()
//
//var dif= today-dys
//var difd= dif/(1000*60*60*24)
//console.log(difd)




//task10
//
//var dys= new Date("Dec 25, 2019")
//
//var today= dys.getTime()
//var dss= new Date()
//var ds= dss.getSeconds()
//var dif= today-ds
//var difd=dif/(1000)
//console.log(dif)




//task13
//
//var dys= new Date("Apr 01, 1999")
//
//var today= new Date()
//var ds= today.getDate()
//var dif= today-dys
//var difd= dif/(1000*60*60*24*30*12)
//console.log(difd)









//task14
//var name="Afaque Ahmed"
//var month="May"
//var unit="300"
//var chargrs="16"
//var netbill=chargrs*unit
//var surcharge=+("350")
//var gross= +(netbill+surcharge);
//console.log("Name of Customer",name)
//console.log("Name of month",month)
//console.log("Units Consumed",unit)
//console.log("Charge per Unit",chargrs)
//console.log("Net Bill (Payable Within Due Date)",netbill)
//console.log("late payment Surchargr",surcharge)
//console.log("gross amount Payable(After Due Date)",gross)
//
//
















//chap 35-38





//task1


//function fun(){
//    
//      var date= new Date()
//console.log(date)
//      }
//fun();





//task2
//
//function fun(){
//    var a=prompt("Enter First name")
//    var b=prompt("Enter First name")
//    var c=a+b
//console.log("Wellcome",c)
//    }
//fun()






//task3 
//
//function fun(){
//
//var a=+prompt("Enter First name")
//    var b=+prompt("Enter First name")
//    var c=+(a+b)
//
//console.log(c)
//
//}
//
//fun()











//task4


//function add(){
//
//    var a1=prompt("Enter First number")
//    var a2=prompt("Enter operator")
//    var a3=prompt("Enter Second Number")
//    
//    if(a2== '+' ){
//        var c = a1+a3
//        console.log(c)
//        
//        
//    }
//    
//else if(a2== '-'){
//        var d=a1-a3
//        console.log(d)
//        
//    }
//    
//    else if(a2=='*'){        
//        var e=a1*a3
//        
//        console.log(e)
//
//    }
//    else if(a2=='/'){
//                var f=a1/a3
//        
//        console.log(f)
//}
//    else{
//        console.log("Incorrect choice")    }
//    
//}
//add()


//task5


//function squareIt(num) {
//    var a= Math.pow(4,2);
//console.log(a)
//}
//
//squareIt()





//task6

//function fun(){
//
//var a= prompt("Enter starting numb")
//var b= prompt("Enter the end number")
//
//var c=a
//    for(var i=a;i<=b;i++){
//        console.log(i)
//    }
//    
//    
//    }
//fun()



//task10

//function check_Palindrome(str_entry){
//// Change the string into lower case and remove  all non-alphanumeric characters
//   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//	var ccount = 0;
//// Check whether the string is empty or not
//	if(cstr==="") {
//		console.log("Nothing found!");
//		return false;
//	}
//// Check if the length of the string is even or odd 
//	if ((cstr.length) % 2 === 0) {
//		ccount = (cstr.length) / 2;
//	} else {
//// If the length of the string is 1 then it becomes a palindrome
//		if (cstr.length === 1) {
//			console.log("Entry is a palindrome.");
//			return true;
//		} else {
//// If the length of the string is odd ignore middle character
//			ccount = (cstr.length - 1) / 2;
//		}
//	}
//// Loop through to check the first character to the last character and then move next
//	for (var x = 0; x < ccount; x++) {
//// Compare characters and drop them if they do not match 
//		if (cstr[x] != cstr.slice(-1-x)[0]) {
//			console.log("Entry is not a palindrome.");
//			return false;
//		}
//	}
//	console.log("The entry is a palindrome.");
//	return true
//}
//check_Palindrome('madam');
//check_Palindrome('nurses run');
//check_Palindrome('fox');
//
//








//task11
//
//function fun(){
//    
//    var a= prompt("Enter first some text")
//    var b= a.slice(0,1)
//    var c=a.slice(1)
//    b=b.toUpperCase()
//    c=c.toLowerCase()
//    var a=b+c
//    console.log(a)
//}
//fun()








//task12


//function find_longest_word(str)
//{
//  var array1 = str.match(/\w[a-z]{0,}/gi);
//  var result = array1[0];
//
//  for(var x = 1 ; x < array1.length ; x++)
//  {
//    if(result.length < array1[x].length)
//    {
//    result = array1[x];
//    } 
//  }
//  return result;
//}
//console.log(find_longest_word('Web Development Tutorial'));







//task13

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('JSresource.com', 'o'));































//chap 38-42







//tas

//
//function fun(a){
//    
//     var a=prompt("Enter the year in YYYY format")
//    if(a%4==0){
//        alert("year is a leap year")
//    }
//    else{
//        alert("Year is not a leap")
//    }
//}
//fun();
//
//













//chap 43- 48



//
//
//
//
//
//
//
//
//
//
////task3
//
//////
////function deleteRow(btn) {
////  var row = btn.parentNode.parentNode;
////row.parentNode.removeChild(row);
////}
//
//
//
//
//
////task 5
//
//function increase(){
//    
//    
//}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////chap  49-52
//
//
////task1
//
//function submit(fieldId){
//
//    var name= document.getElementById("name")
//    var pas=document.getElementById("pas")
//    var email=document.getElementById("email")
//    var p = document.createElement("p")
//    var h2= document.createElement("h2")
//    var h3=document.createElement("h3")
//    var textNode= document.createTextNode(name.value)
//    var textNode2= document.createTextNode(pas.value)
//    var textNode3= document.createTextNode(email.value)
//    p.appendChild(textNode)
//    h2.appendChild(textNode2)
//    h3.appendChild(textNode3)
//    var txt=document.getElementById("txt")
//   
//    txt.appendChild(p)
//    txt.appendChild(h2)
//    txt.appendChild(h3)
//    
//    if(document.getElementById(fieldId).value===""){
//        alert("Blank fields are not allowed")
//    }
//}
//
//
//
//
//
//
//
////task2
//function read(){
//    
//    var text=" I am afaque ahmed from a village of  shikarpur named as jhali Kalwri a very populous vilage named as jhali Kalwri a very populous vilage"
//    var txt= document.getElementById("trt")
//    txt.innerHTML=text;
//}
//


//task3
//
function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}







function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 var age=document.getElementById("age_row"+no);
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}