// Function to calculate the age based on birthday
function calcAge(birthday){
    const today = new Date();
    const birth = new Date(birthday);
    
    let age = today.getFullYear() - birth.getFullYear();

    // Verify if I still haven't had my birthday this year
    if (today.getMonth() < birth.getMonth() ||
        today.getMonth() === birth.getMonth() &&
         today.getDate() < birth.getDate()){
            age--
    }
    return age;
}

// automatically update age
function UpdateAge(){
    const birthday = new Date("2002-12-26");
    const age = calcAge(birthday);
    
    document.getElementById("newAge").textContent = `${age}`;
}
UpdateAge();