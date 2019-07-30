function removeCharacter(string , characterPosition){
    var resultString = string.substring(0, characterPosition-1);
    string = string.substring(characterPosition);
    resultString = resultString.concat(string);
    return resultString;
}
console.log(removeCharacter("математика", 2));
