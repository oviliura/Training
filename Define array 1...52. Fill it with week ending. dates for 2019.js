var currDate = new Date(2019, 0, 01) ;
var i=0;
var n=0;
while(currDate.getDay()!=6){
    currDate.setDate(currDate.getDate()+1);
    } 
  
var endingDates = new Array(52) ; 
    while (i<52){ 
        //endingDates.append(currDate);
        endingDates[i] = new Date(currDate.setDate(currDate.getDate()+n));
        i++;
        n=7;
        // console.log(currDate);
        }
       console.log(endingDates);