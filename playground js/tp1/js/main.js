const resetBtn = document.getElementById("reset-btn")
const addBtn = document.getElementById("add-btn")
addBtn.setAttribute("disabled", "true")
const viderForm = () => {
    cne.value = ""
    firstname.value = ""
    lastname.value = ""
    dob.value = ""
    cne.classList.remove("valid")
    cne.classList.remove("error")
    firstname.classList.remove("valid", "error")
    lastname.classList.remove("valid", "error")
    dob.classList.remove("valid", "error")
    document.getElementById("message-firstname").textContent = ""
    document.getElementById("message-lastname").textContent = ""
    document.getElementById("message-cne").textContent = ""
    document.getElementById("message-dob").textContent = ""

}
const verifyCne = () => {
    if (cne.value.length != 8) {
        cne.classList.add("error")
        cne.classList.remove("valid")
        document.getElementById("message-cne").textContent = "cne must be 8 characters"
    }
    else {
        cne.classList.remove("error")
        cne.classList.add("valid")
        document.getElementById("message-cne").textContent = ""
    }
}
cne.addEventListener('focusout', () => {
    verifyCne()
})
cne.addEventListener('input', () => {
    verifyCne()
    checkFormValidity()
})
lastname.addEventListener('input', () => {
    if (lastname.value.length < 3) {
        lastname.classList.add("error")
        lastname.classList.remove("valid")
        document.getElementById("message-lastname").textContent = "lastname must be at least 3 characters"
    }
    else {
        lastname.classList.remove("error")
        lastname.classList.add("valid")
        document.getElementById("message-lastname").textContent = ""
    }
    checkFormValidity()
})
firstname.addEventListener('input', () => {
    if (firstname.value.length < 3) {
        firstname.classList.add("error")
        firstname.classList.remove("valid")
        document.getElementById("message-firstname").textContent = "firstname must be at least 3 characters"
    }
    else {
        firstname.classList.remove("error")
        firstname.classList.add("valid")
        document.getElementById("message-firstname").textContent = ""
    }
    checkFormValidity()
})
dob.addEventListener('input', () => {
    if (dob.value == "") {
        dob.classList.add("error")
        dob.classList.remove("valid")
        document.getElementById("message-dob").textContent = "date of birth is required"
    }
    else {
        dob.classList.remove("error")
        dob.classList.add("valid")
        document.getElementById("message-dob").textContent = ""
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
    if (searchStudentByCne(cneValue) != null) {
        alert("student with this cne already exists")
        return
    }
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
    students.push(student)
    refreshStat()
    localStorage.students = JSON.stringify(students)
    viderForm()
    addBtn.setAttribute("disabled", "true")
})
const refreshStat = () => {
    document.querySelector(".stat-value").textContent = students.length
}
// load data from local storage
let students = localStorage.students || "[]"
students = JSON.parse(students)
// students.forEach(student=>addStudentToTable2(student))
// students.forEach(function(student){
//         addStudentToTable2(student)
//     })
refreshStat()
for (let i = 0; i < students.length; i++) {
    addStudentToTable2(students[i])
}
cne.focus()

document.getElementById("search-input").addEventListener("input",()=>{
    let value = document.getElementById("search-input").value
    let trs = tbody.getElementsByTagName("tr")
    for(let i=0;i<trs.length;i++)
    {
        if(trs[i].innerText.toLowerCase().search(value.toLowerCase())==-1)
            trs[i].classList.add("hide-tr")
        else 
            trs[i].classList.remove("hide-tr")
    }
})