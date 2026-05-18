// ajouter les donnes d un etudiant a la table html
const addStudentToTable = (student) => {
    const tr = document.createElement('tr')
    const tdCne = document.createElement('td')
    const tdFirstName = document.createElement('td')
    const tdLastName = document.createElement('td')
    const tdDateBirth = document.createElement('td')
    const tdActions = document.createElement('td')
    const span = document.createElement('span')
    const button = document.createElement('button')
    // parent.append(fils)
    tr.append(tdCne, tdFirstName, tdLastName, tdDateBirth, tdActions)
    tdCne.append(span)
    tdActions.append(button)
    tbody.append(tr)//document.getElementById("tbody") optional

    span.textContent = student.cne
    tdFirstName.textContent = student.firstName
    tdLastName.textContent = student.lastName
    tdDateBirth.textContent = student.dateOfBirth
    button.textContent = "Delete"

    span.classList.add("badge")
    tdActions.classList.add("td-actions")
    button.classList.add("btn", "btn-danger", "btn-sm")

    button.setAttribute("type", "button")

}
const escapeHtml = (text) => {
    text =text.replace("&", "&amp;")
    text = text.replace("<", "&lt;")
    text = text.replace(">", "&gt;")
    text = text.replace('"', "&quot;")
    text = text.replace("'", "&#039;")
    return text
}
const addStudentToTable2 = (student) => {
    const tr = document.createElement('tr')
    tr.innerHTML += `
                                <td><span class="badge">${escapeHtml(student.cne)}</span></td>
                                <td> ${escapeHtml(student.firstName)} </td>
                                <td>${escapeHtml(student.lastName)}</td>
                                <td>${escapeHtml(student.dateOfBirth)}</td>
                                <td class="td-actions">
                                    <button type="button" class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            `;
    tr.querySelector(".btn-danger").addEventListener("click", () => {
        let newStudents = []
        for (let i = 0; i < students.length; i++)
            if (students[i].cne != student.cne)
                newStudents.push(students[i])
        students = newStudents
        refreshStat()
        localStorage.students = JSON.stringify(students)
        tr.remove()
    })
    tbody.append(tr)

}

const checkFormValidity = () => {
    if (document.querySelector(".student-form").getElementsByClassName("valid").length == 4) {
        addBtn.removeAttribute("disabled")
    }
    else {
        addBtn.setAttribute("disabled", "true")
    }
}
const searchStudentByCne = (cne) => {
    for (let i = 0; i < students.length; i++) {
        if (students[i].cne == cne) {
            return students[i]
        }
    }
    return null
}