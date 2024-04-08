// //Question 115: Use a switch statement to log the days of the week based on a number (1-7).
// Explain & TIP: A switch statement is a great way to select one of many code blocks to be executed. It's particularly useful for scenarios like mapping numbers to days of the week.
//solution
//A switch statement is a control flow statement found in many programming languages used to execute different blocks of code based on the value of a variable or expression. It provides an alternative to a series of if...else if...else statements when dealing with multiple possible conditions.
//syntax:
//switch (expression) {
//     case 1:
//         // code block to execute if expression equals value1
//         break;
//     case 2:
//         // code block to execute if expression equals value2
//         break;
//     // additional cases as needed
//     default:
//         // code block to execute if expression doesn't match any case
// }
function log_week_day(day) {
    switch (day) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Number");
            break;
    } //closing of switch body.
} //closing of function body.
//invoke function as below:-
log_week_day(8);
//Author-Huma Mohsin
