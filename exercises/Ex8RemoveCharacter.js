function removeCharacter(string , characterPosition){
    var resultString = string.substring(0, characterPosition);
    string = string.substring(characterPosition + 1);
    resultString = resultString.concat(string);
    return resultString;
}
console.log(removeCharacter("12345", 2));