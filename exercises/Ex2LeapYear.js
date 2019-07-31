function isLeapYear(inputYear){
    if((inputYear%400 == 0)||(inputYear%100 !=0 && inputYear%4 == 0)){
        var isLeap = true;
    }
    else{
        var isLeap = false;  
    }
    return isLeap;
}

/* function printResult(inputYear){
    var isLeap = isLeapYear(inputYear);
    if(isLeap){
        console.log("In the Gregorian calendar " + inputYear + " year is leap.");
    }
    else{
        console.log("In the Gregorian calendar " + inputYear + " year is not leap.");
    }
}
printResult(1900); */

