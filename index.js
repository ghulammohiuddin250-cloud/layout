let age = prompt("Enter your age:");
let hasAdmitCard = prompt("Do you have admit card? (yes/no)");
let feePaid = prompt("Is fee paid? (yes/no)");
let lateMinutes = prompt("Enter late minutes:");
let warningsCount = prompt("Enter warnings count");

age = Number(age);
lateMinutes = Number(lateMinutes);
warningsCount = Number(warningsCount);

let message = "";

if (age < 18 || hasAdmitCard !== "yes" || feePaid !== "yes") {
    ++warningsCount; // pre-increment
    message = "Entry Denied due to missing requirements";
}

else {
    if (lateMinutes > 10) {
        warningsCount++; // post-increment

        if (warningsCount >= 2) {
            message = "Entry Denied due to late arrival";
        } else {
            message = "Entry Allowed with Warning";
        }
    } 
    else {
        message = "Entry Allowed";
    }
}

document.write(message);