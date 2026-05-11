const resetBtn = document.getElementById("reset-btn")
const addBtn = document.getElementById("add-btn")
addBtn.setAttribute("disabled", "true")
const viderForm = () => {
    cne.value = ""
    firstname.value = ""
    lastname.value = ""
    dob.value = ""
}
cne.addEventListener('input', () => {
    if (cne.value.length != 8) {
        cne.classList.add("error")
        cne.classList.remove("valid")
        document.getElementById("message-cne").textContent="cne must be 8 characters"
    }
    else {
        cne.classList.remove("error")
        cne.classList.add("valid")
        document.getElementById("message-cne").textContent=""
    }
    checkFormValidity()
})
lastname.addEventListener('input', () => {
    if (lastname.value.length < 3) {
        lastname.classList.add("error")
        lastname.classList.remove("valid")
        document.getElementById("message-lastname").textContent="lastname must be at least 3 characters"
    }
    else {
        lastname.classList.remove("error")
        lastname.classList.add("valid")
        document.getElementById("message-lastname").textContent=""
    }
    checkFormValidity()
})
firstname.addEventListener('input', () => {
    if (firstname.value.length < 3) {
        firstname.classList.add("error")
        firstname.classList.remove("valid")
        document.getElementById("message-firstname").textContent="firstname must be at least 3 characters"
    }
    else {
        firstname.classList.remove("error")
        firstname.classList.add("valid")
        document.getElementById("message-firstname").textContent=""
    }
    checkFormValidity()
})
dob.addEventListener('input', () => {
   if(dob.value == "") {
    dob.classList.add("error")
    dob.classList.remove("valid")
    document.getElementById("message-dob").textContent="date of birth is required"
   }
   else {
    dob.classList.remove("error")
    dob.classList.add("valid")
    document.getElementById("message-dob").textContent=""
   }
   checkFormValidity()
})
resetBtn.addEventListener('click', () => {
    //vider les champs => vider les inputs => input.value = ""
    viderForm()
})
addBtn.addEventListener('click', function () {
    //recuperation des valeurs
    let cneValue = cne.value
    let firstNameValue = firstname.value
    let lastNameValue = lastname.value
    let dobValue = dob.value
    const student = {
        cne: cneValue,
        firstName: firstNameValue,
        lastName: lastNameValue,
        dateOfBirth: dobValue
    }
    addStudentToTable2(student)
    viderForm()
})