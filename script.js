document.getElementById("applyForm").addEventListener("submit", function(event) {
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let phone = document.querySelector('input[name="phone"]').value;
    
    if (!name || !email || !phone) {
        alert("All fields are required!");
        event.preventDefault();
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Invalid email format!");
        event.preventDefault();
    } else if (!/^\d{10}$/.test(phone)) {
        alert("Enter a valid 10-digit phone number!");
        event.preventDefault();
    }
});
