// //Question 116: Create a switch case that matches several cases to the same code block, representing seasons.
// Explain & TIP: You can group multiple case statements together when they should execute the same block of code, which is handy for categorizing items into broader groups.
// //
//solution:
function Seasons_In_Year(months) {
    var seasons;
    switch (months) {
        case 12: //We use multiple case labels for each season, grouping them together to execute the same code block.
        case 1:
        case 2:
            console.log("These are the months of Winters Season in Pakistan");
            break;
        case 3:
        case 4:
        case 5:
            console.log("These are the months of Spring Season in Pakistan");
            break;
        case 6:
        case 7:
        case 8:
            console.log("These are the months of Summer Season in Pakistan");
            break;
        case 9:
        case 10:
        case 11:
            console.log("These are the months of Autumn Season in Pakistan ");
            break;
        default:
            console.log("Invalid Month you Entered, Try correct Month Number");
    } //closing of switch statement.
} //closing of function body.
//invoke function
Seasons_In_Year(13);
//Author-HUMA MOHSIN
