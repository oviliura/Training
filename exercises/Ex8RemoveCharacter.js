function removeCharacter(from_string , characterPosition){
    var resultString = from_string.substring(0, characterPosition);
    from_string = from_string.substring(characterPosition + 1);
    resultString = resultString.concat(from_string);
    return resultString;
}
console.log(removeCharacter("12345", 2));
