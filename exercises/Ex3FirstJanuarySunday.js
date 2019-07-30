function firstSundayInJanuary(){
    var firstYear = 2019;
    var lastYear = 2050;
    var currDate = new Date(firstYear, 0, 01);
    var i = 0, j=0;
    var sundayNewYear = [];

    while(currDate.getFullYear() < lastYear){
        currDate = new Date(firstYear+j, 0, 01);

        if(currDate.getDay()==6){
            sundayNewYear[i] = currDate;
            i++;
        }
        j++;        
    }
    return sundayNewYear;
}

var yourResult = firstSundayInJanuary();
console.log(yourResult); 