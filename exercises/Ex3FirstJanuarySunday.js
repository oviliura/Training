function firstSundayInJanuary(){
    var firstYear = 2019;
    var lastYear = 2050;
    var currYear = new Date(firstYear, 0, 01);
    var i = 0;
    var sundayInJanuary = [];

    while(currYear.getFullYear() < lastYear){
        currYear = new Date(firstYear+i, 0, 01);

        while(currYear.getDay()!=6){
            currYear.setDate(currYear.getDate()+1);  //finding first Sunday in January
        }

        sundayInJanuary[i] = currYear;
        i++;
    }
    return sundayInJanuary;
}

var yourResult = firstSundayInJanuary();
console.log(yourResult); 
