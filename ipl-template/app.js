/*var a={
    dish:"biryani",
    Type:"Chicken",
    Price:"90",
    Hotel:"Garib nawaz",
    place:"Near Makhmali talaw",
}
document.write("I want to eat " + a.dish + " but near my class therse is cawa biryani which i dont like so my friend told me to go to "+ a.hotel +"which is "+ a.place + "so i go there "+ "here biryani type"+ a.Type +" and was so deliciouse to eat with just in "+ a.Price +"but it is far away from my class so i got late and will come late home today" )
*/
/*
var ipl=["Mi","Csk","Rcb","Rr","Gt","Lsg","Kxip","Kkr","Srh","Pw"]






function a() {
    document.write("Hwllo hopw you will not show any kachara error to me like java")
        
}

function add(a,b){
    var c=a+b
    document.write("addition is " +c +"<br>")
    
}

add(4,2);
function multiply(a,b){
    var c=a*b
    document.write("multiply is "+c+"<br>")

}

multiply(4,2);
function sub(a,b){
    var c=a-b
    document.write("sub is " +c +"<br>")

}

sub(4,2);
function div(a,b){
    var c=a/b
    document.write("div is" +c +"<br>")

}

div(4,2);
even=[]
odd=[]
function iseven(num){
    
    if(num %2==0){
        even.push(num)
        document.write("this " + num +" is even " + " number <br>")
    }else{
        odd.push(num)
        document.write("this " + num +" is odd " + " number <br>")
    }
}

iseven(4)
iseven(8)
iseven(6)
iseven(5)
iseven(15)
iseven(25)
iseven(54)

document.write("even numers is "+ even+"<br>")
document.write("odd numers is "+ odd+"<br>")
*/

// function mul(){
//     var m=prompt("Enter the first number");
//     var k=prompt("Enter the second numer");
//     var o=m*k
//     document.write("product of two numbers "+ o)
// }
// mul()
// function odd (){
//     var m=prompt("Enter the first number");
    
//     if(m%2==0){
//         document.write(n"even number "+ o)
//     }
//     document.write("product of two numbers "+ o)
// }
// mul()


// function a(){
//     console.log(c)
//     GG=document.getElementById("GG")
//     GG.innerHTML="virat"

//     if (c==0) {

//         GG.innerHTML=""
//         c=1
//     } else {
        
        
//         c=0
//     }
    
    
// }

// function c(){
//     document.getElementById("ms").src="./images/download.jpeg"
   
    
// }
// function d(){
//     document.getElementById("ms").src="./images/msdhoni.jpeg"
   
// }

// function addition() {
//     var first=parseInt(document.querySelector("#first").value)
//     var second=parseInt(document.querySelector("#second").value)
//     var z=first + second
//     document.querySelector("#result").innerHTML=z
    
// }

// function multiply(){
//     console.log("a")
//     var first=document.querySelector("#first").value
//     var second=document.querySelector("#second").value
//     var z=first * second
//     document.getElementById("result").innerHTML=z
// }

// function speak(){
//     var s=document.querySelector("textarea").value
//     var k= new SpeechSynthesisUtterance(s)
//     speechSynthesis.speak(k)
//     console.log(k)
// }


function mi(){
    document.getElementById("mumbai").style.display="block";
    document.getElementById("banglore").style.display="none";
    document.getElementById("chennai").style.display="none";
}
function rcb(){
    document.getElementById("mumbai").style.display="none"
    document.getElementById("banglore").style.display="block"
    document.getElementById("chennai").style.display="none"
}
function csk(){
    document.getElementById("mumbai").style.display="none"
    document.getElementById("banglore").style.display="none"
    document.getElementById("chennai").style.display="block"
}

function ipl(){
    document.getElementById("mumbai").style.display="block"
    document.getElementById("banglore").style.display="block"
    document.getElementById("chennai").style.display="block"
    
}
