// Function to calculate age
function calculateAge() {
    const dobInput = document.getElementById("dob").value;
  
    // Check if input is not empty
    if (!dobInput) {
      document.getElementById("result").innerText = "Please select your date of birth.";
      return;
    }
  
    // Get the user's birth date
    const dob = new Date(dobInput);
    const today = new Date();
  
    // Calculate the difference in years
    let age = today.getFullYear() - dob.getFullYear();
  
    // Adjust if the birthday hasn't occurred yet this year
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    // Display result
    document.getElementById("result").innerText = `You are ${age} years old.`;
  }
  