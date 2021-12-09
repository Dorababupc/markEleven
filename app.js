var dob=document.querySelector("#date-of-birth");
var luckyno=document.querySelector("#lucky-number");
var checkButton=document.querySelector("#check-button");
var message=document.querySelector("#display-error");
function numSum(dob){
    var date=dob.replaceAll("-","");
    var sum=0;
    for(var i=0;i<date.length;++i){
       sum+=Number(dob.charAt(i));
    }
     return sum;
}
function check(date){
    if(date%luckyno.value===0){
        return "Your birthday is lucky";
    }
    return "Your birthday is not lucky";
}
checkButton.addEventListener("click",function checkLucky(){
    var date=numSum(dob.value);
     if(date && luckyno.value){
         message.innerText(check(date));
     }
     else{
        message.innerText("Please enter the numbers");
     }
});
