function triangleArea(a, b, c){
    var halfTrianglePerimeter = (a+b+c)/2;
    var triangleArea = Math.sqrt(halfTrianglePerimeter*(halfTrianglePerimeter-a)*(halfTrianglePerimeter-b)*(halfTrianglePerimeter-c));
    return triangleArea;
}
var result = triangleArea(25, 63, 72);
console.log("The area of a triangle is " + result + ".");
