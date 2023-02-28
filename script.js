var fullName = prompt("Please enter your full name:");
var userName = prompt("Please emter  your username:");

if (confirm("What is your gender? \n Press OK if you are Male \n Cancel if Female") == true) {
    alert("Your profile gender is set to MALE");
    let desc = prompt("Please type a brief description of yourself");
    let year = prompt("Please enter your Birth Year:");
    let age = 2023 - year;

    if (confirm("Do you want to use a custom profile picture?") == true) {
        var pfp = prompt("Please enter the file name of the picture. (Ex: wow.jpg)");
        alert("Profile picture has been updated.");
        document.getElementById("ppic").src = pfp;
        document.getElementById("fname").innerHTML = fullName;
        document.getElementById("gender").innerHTML = "M";
        document.getElementById("username").innerHTML = userName;
        document.getElementById("desc").innerHTML = desc;
        document.getElementById("year").innerHTML = year;
        document.getElementById("age").innerHTML = age;
    } else {
        alert("No image has been set.");
        document.getElementById("fname").innerHTML = fullName;
        document.getElementById("gender").innerHTML = "M";
        document.getElementById("username").innerHTML = userName;
        document.getElementById("desc").innerHTML = desc;
        document.getElementById("year").innerHTML = year;
        document.getElementById("age").innerHTML = age;
    }

} else {
    alert("Your profile gender is set to FEMALE");
    let desc = prompt("Please type a brief description of yourself");
    let year = prompt("Please enter your Birth Year:");
    let age = 2023 - year;

    if (confirm("Do you want to use a custom profile picture?") == true) {
        var pfp = prompt("Please enter the file name of the picture. (Ex: wow.jpg)");
        alert("Profile picture has been updated.");
        document.getElementById("ppic").src = pfp;
        document.getElementById("fname").innerHTML = fullName;
        document.getElementById("gender").innerHTML = "F";
        document.getElementById("username").innerHTML = userName;
        document.getElementById("desc").innerHTML = desc;
        document.getElementById("year").innerHTML = year;
        document.getElementById("age").innerHTML = age;
    } else {
        alert("No image has been set.");
        document.getElementById("fname").innerHTML = fullName;
        document.getElementById("gender").innerHTML = "F";
        document.getElementById("username").innerHTML = userName;
        document.getElementById("desc").innerHTML = desc;
        document.getElementById("year").innerHTML = year;
        document.getElementById("age").innerHTML = age;
    }
}



