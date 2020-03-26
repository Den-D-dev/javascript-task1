// 1.
var firstName = 'Dennis ';
var middleName = 'Oluchukwu ';
var lastName = 'Mgbah';

var fullName = firstName + middleName + lastName;

// console.log(fullName);
document.getElementById("name").innerHTML = fullName;


// 2.
var myCourses = ['Html', ' Css', ' Javascript', ' Php', ' Node.js'];
// console.log(myCourses);
document.getElementById("courses").innerHTML = "<strong> The courses I registered for in the HNG internship are: </strong>" + myCourses;


// 3.

var output = "";

for (var x = 0; x <= 200; x++) {
    if (myCourses.length % 2 === 0 && x % 2 === 0) {
        // console.log(x + " is even");
        output += x + " is even <br />";
    }
    else {
        // console.log(x + " is odd");
        output += x + " is odd <br />";
    }
}


document.getElementById("render").innerHTML = output;
