function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value) - 1; // JS months: 0-11
    const year = parseInt(document.getElementById("year").value);

    // Validation
    if (!day || !month || !year) {
        document.getElementById("result").innerText = "Please enter a valid date.";
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month, day);

    if (birthDate > today) {
        document.getElementById("result").innerText = "Birth date cannot be in the future!";
        return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    // Adjust calculations
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("result").innerHTML = 
        `You are <span style="color:#4A90E2">${ageYears}</span> years, 
         <span style="color:#4A90E2">${ageMonths}</span> months, 
         and <span style="color:#4A90E2">${ageDays}</span> days old.`;
}
