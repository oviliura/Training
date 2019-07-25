function nextChristmas(){ 
    var todaysDate = new Date();
    var currYear = todaysDate.getFullYear();
    //var ChristmasDate = new Date(currYear, 0, 07);
    var ChristmasDate = new Date(currYear, 0, 07);
    if(todaysDate >= ChristmasDate){
        //var currYear = todaysDate.getFullYear()+1;
        var ChristmasDate = new Date(currYear+1, 0, 07);
    }
    return Math.ceil((ChristmasDate-todaysDate)/3600/24/1000);
}
var result = nextChristmas();
console.log(result);