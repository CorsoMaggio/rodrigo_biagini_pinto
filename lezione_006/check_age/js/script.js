document.getElementById("ageForce").addEventListener("submit", function(e) {
    e.preventDefault();
    let dob = document.getElementById("dob").value;
    console.log(dob)
    let dobdate = new Date(dob);
    console.log(dobdate);
    let today = new Date();
    console.log(today)
    let age = today.getFullYear() - dobdate.getFullYear();
    console.log(age, today.getFullYear(), dobdate.getFullYear());

})