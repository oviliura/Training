//Number of working days according to the Country. Input parameters : Date1, Date2, Country
function WorkDays(Date1, Date2, Country){
    var yourWorkDays=0;

    if (Date1 > Date2){ 
        return WorkDays(Date2, Date1, Country); 
    }
    else{ 
            if(Country=="USA"){ 
               var nonworkingDay1 = 5;
               var nonworkingDay2 = 6;
            }
            else if(Country=="Brunei"){ 
                var nonworkingDay1 = 4;
                var nonworkingDay2 = 6;
            }
            else if (  (Country=="India")  ||  (Country=="Nepal")  ||  (Country=="Iran")  ){ 
                var nonworkingDay1 = 6;
                var nonworkingDay2 = -1; //this country have only one unworking day in a week
            }
            else{ 
                var nonworkingDay1 = 6;
                var nonworkingDay2 = 0;
            }

            while(Date1<=Date2){ 
                if ((Date1.getDay()!==nonworkingDay1)&&(Date1.getDay()!==nonworkingDay2)) { 
                    yourWorkDays++;
                }
                    Date1.setDate ( Date1.getDate()+1);
            }
            //console.log(yourWorkDays);
        }
     return yourWorkDays;
}

var x = new Date(2019, 6, 15);
var y = new Date(2019, 6, 15);
z=WorkDays(x, y, "USA");
//console.log(y.getDate());
console.log(z);