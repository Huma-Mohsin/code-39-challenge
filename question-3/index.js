// //Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
// Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none of the other case labels match the expression's value.
function colorsInRainbow(color_Number) {
    //vibgyor
    switch (color_Number) {
        case 1:
            console.log("Violet");
            break;
        case 2:
            console.log("Indigo");
            break;
        case 3:
            console.log("Blue");
            break;
        case 4:
            console.log("Green");
            break;
        case 5:
            console.log("Yellow");
            break;
        case 6:
            console.log("Orange");
            break;
        case 7:
            console.log("Red");
            break;
        default:
            console.log("you Entered Invalid color Number");
    }
} //close body of function
//invoke function
colorsInRainbow(8);
//Author-HUMA MOHSIN
