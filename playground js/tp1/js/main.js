const resetBtn = document.getElementById("reset-btn")
const addBtn = document.getElementById("add-btn")
addBtn.setAttribute("disabled", "")
const viderForm = () => {
    cne.value = ""
    firstname.value = ""
    lastname.value = ""
    dob.value = ""
}
cne.addEventListener('input', () => {
    if (cne.value.length > 0 && cne.value.length != 8) {
        cne.classList.add("error")
        cne.classList.remove("valid")
        document.getElementById("message-cne").textContent="cne must be 8 characters"
    }
    else {
        cne.classList.remove("error")
        cne.classList.add("valid")
        document.getElementById("message-cne").textContent=""
    }
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