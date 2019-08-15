function daysLeft(yourDate){ 
    var todaysDate = new Date();
    var your_date = new Date(yourDate);
    if(todaysDate >= your_date){
        return 0;
    }
    return Math.ceil((your_date-todaysDate)/3600/24/1000);
}
var result = daysLeft('2019,08,16');
console.log(result);
