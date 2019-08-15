function isLeapYear(inputYear){
    if((inputYear%400 == 0)||(inputYear%100 !=0 && inputYear%4 == 0)){
        var isLeap = true;
    }
    else{
        var isLeap = false;  
    }
    return isLeap;
}
