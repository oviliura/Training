function isLeapYear(inputYear){
    if((inputYear%400 == 0)||(inputYear%100 !=0 && inputYear%4 == 0)){
        var laepOrNo = "leap";
    }
    else{
        var laepOrNo = "not leap";  
    }
    return console.log("In the Gregorian calendar " + inputYear + " year is " + laepOrNo + ".");
}
isLeapYear(900);