const button = document.getElementById("submitButton")
function message(e) {
    e.preventDefault()
    window.confirm("Form submission successful!");    
}
button.addEventListener("click", message);