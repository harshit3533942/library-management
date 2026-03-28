// =====================
// LOGIN FUNCTION
// =====================

function loginUser(){

let role = document.querySelector('input[name="role"]:checked')

if(!role){
alert("Please select a role")
return false
}

localStorage.setItem("role", role.value)

window.location.href="dashboard.html"

return false

}


// =====================
// DASHBOARD ROLE CONTROL
// =====================

function checkRole(){

let role = localStorage.getItem("role")

if(role === "user"){

let maintenance = document.getElementById("maintenanceLink")

if(maintenance){
maintenance.style.display = "none"
}

}

}


// =====================
// BOOK SEARCH VALIDATION
// =====================

function validateSearch(){

let book = document.getElementById("book").value
let author = document.getElementById("author").value

if(book=="" && author==""){

document.getElementById("error").innerText =
"Please enter Book Name or Author"

return false

}

}


// =====================
// ISSUE DATE VALIDATION
// =====================

function setIssueDate(){

let today = new Date().toISOString().split("T")[0]

let issue = document.getElementById("issueDate")

if(issue){
issue.min = today
}

}


// =====================
// RETURN DATE (15 DAYS)
// =====================

function setReturnDate(){

let issueDate = document.getElementById("issueDate").value

if(issueDate=="") return

let date = new Date(issueDate)

date.setDate(date.getDate()+15)

let returnDate = date.toISOString().split("T")[0]

document.getElementById("returnDate").value = returnDate

}


// =====================
// RETURN BOOK VALIDATION
// =====================

function validateReturn(){

let book = document.getElementById("book").value
let serial = document.getElementById("serial").value

if(book=="" || serial==""){

document.getElementById("error").innerText =
"Book Name and Serial Number required"

return false

}

}


// =====================
// FINE CALCULATION
// =====================

function calculateFine(){

let issue = new Date(document.getElementById("issueDate").value)
let returnDate = new Date(document.getElementById("returnDate").value)

let days = (returnDate - issue)/(1000*60*60*24)

let fine = 0

if(days > 15){

fine = (days - 15) * 10

}

document.getElementById("fine").value = fine

}


// =====================
// FINE PAYMENT VALIDATION
// =====================

function validateFine(){

let fine = document.getElementById("fine").value
let paid = document.getElementById("paid").checked

if(fine > 0 && !paid){

document.getElementById("error").innerText =
"Please confirm fine payment"

return false

}

}