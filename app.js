function calculateAge(dob) {
    let birthDate = new Date(dob);
    let currentDate = new Date();

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();
    let hours = currentDate.getHours() - birthDate.getHours();
    let minutes = currentDate.getMinutes() - birthDate.getMinutes();
    let seconds = currentDate.getSeconds() - birthDate.getSeconds();
 
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        let previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days += previousMonth;
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }
    return {
        years: years,
        months: months,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
   
    };
}


const dob = prompt("Enter your date of birth (YYYY-MM-DD):");

if (dob) {
    let  birthDate = new Date(dob);
    if (!isNaN(birthDate.getTime())) { 
        let  age = calculateAge(dob);
        alert(`You are ${age.years} years, ${age.months} months, ${age.days} days, ${age.hours} hours, ${age.minutes} minutes, and ${age.seconds} seconds old.`);
    } else {
        alert("Invalid date format. Please enter the date in YYYY-MM-DD format.");
    }
} 
// else {
//     alert("Please enter your date of birth.");
// }
