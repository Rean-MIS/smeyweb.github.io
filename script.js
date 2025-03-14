function showFormData(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let salary = document.getElementById("salary").value;
    let hiredate = document.getElementById("hiredate").value;
    // Format salary as USD currency
    let formattedSalary = new Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'USD' 
        }).format(salary);

    // Get the alert box
    let alertBox = document.getElementById("formAlert");

    // Reset the alert box before inserting new data
    alertBox.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
            <strong>Form Submitted!</strong>
            <button type="button" class="btn-close" onclick="hideAlert()" aria-label="Close"></button>
        </div>
        <hr>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Salary:</b> ${formattedSalary}</p>
        <p><b>Hire Date:</b> ${hiredate}</p>
    `;
    // Show the alert
    alertBox.classList.remove("d-none");
    // alert result show message
    alert("1. EmpName: " + name +"\n"+
          "2. Email: " + email +"\n" +
          "3. Salary: " + formattedSalary +"\n"+
          "4. HireDate: " + hiredate  
    );

}
function hideAlert() {
    // Instead of removing, just hide it
    document.getElementById("formAlert").classList.add("d-none");
}
