function nextChristmas(){ 
    var todaysDate = new Date();
    if(todaysDate.getMonth() == 0){
        if(todaysDate.getDate() == 7){
            alert("Merry Christmas!!!");
        }
        else if(todaysDate.getDate() == 6){
            alert("Tomorrow is Christmas!!!");
        }
        else if(todaysDate.getDate() < 6){
            var daysForChristmas = 7 - todaysDate.getDate();
            alert("Christmas is coming. There are " + daysForChristmas + " days left for Chrismas.");
        }
    }
    else{
        var currYear = todaysDate.getFullYear()+1;
        var ChristmasDate = new Date(currYear, 0, 07);
        var daysForChristmas = Math.ceil((ChristmasDate.getTime() - todaysDate.getTime())/(24*3600*1000)); 
        alert("There are " + daysForChristmas + " days left for Chrismas.");
    }
}
nextChristmas();