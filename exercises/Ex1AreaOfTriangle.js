function triangleArea(a, b, c){
    var halfTrianglePerimeter = (a+b+c)/2;
    var triangleArea = Math.sqrt(halfTrianglePerimeter*(halfTrianglePerimeter-a)*(halfTrianglePerimeter-b)*(halfTrianglePerimeter-c));
    return (console.log("The area of a triangle with sides " + a + ", " + b +" and " + c + " is " + triangleArea + "."));
}
triangleArea(25, 63, 72);