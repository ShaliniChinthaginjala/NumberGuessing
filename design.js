var count=0;
var b=Math.ceil(Math.random()*100);
document.getElementById("check").onclick =function(){
    var a= parseInt(document.getElementById("n1").value);
    if(a==b){
    wait.textContent ="Congratulations!!! you have got the number in "+count+"tries";
    }
    else if(a>b){
    count++;
    wait.textContent ="try smaller number";
     }
    else{
    count++;
    wait.textContent ="try greater number";
    }
}