const resetBtn = document.getElementById("reset-btn")
const addBtn = document.getElementById("add-btn")
const viderForm = () => {
    cne.value = ""
    firstname.value = ""
    lastname.value = ""
    dob.value = ""
}
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