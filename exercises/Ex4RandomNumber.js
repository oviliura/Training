function yourLucky(yourInput){
    var randomInt = Math.floor(Math.random() * 10);
    var userNumber = parseInt(prompt(yourInput + "Please enter an integer number between 1 and 10.", ""));
    if (userNumber > 0 && userNumber <= 10){
        if(randomInt == userNumber){
            alert("Good Work.");
        }
        else{
            alert("Not matched.");
        }
    }
    else if (isNaN(userNumber)){
        yourInput = "Your input is not a number. "
        return yourLucky(yourInput);
    }
    else {
        yourInput = "Your input is incorrect. "
        return yourLucky(yourInput);
    }
}
yourLucky();