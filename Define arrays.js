var Last_Name =[]; 
var First_Name =[] ;
var Full_Name =[] ;
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0";
var charactersLength = characters.length;
for(var i = 0; i<10; i++){ 
    Last_Name[i]="";
    for ( var j = 0; j < 7; j++ ) {
     Last_Name[i] += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
    First_Name[i]="";  
 for ( var j = 0; j < 5; j++ ) {
      First_Name[i] += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
}
for(var i = 0; i<10; i++){ 
    Full_Name[i]=Last_Name[i].concat(" ",First_Name[i]);
}
console.log(Last_Name);
console.log(First_Name);
console.log(Full_Name);
