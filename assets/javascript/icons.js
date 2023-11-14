const listIcons = document.querySelectorAll(".icons ul li")
let selectedElement = null

function mouseOverFunction(event) {
  const classOfElement = event.target.className
  const dataDiv = infos.querySelector(".data")

  const firstIcon = listIcons[0]
  firstIcon.classList.remove("selecionado")

  if (classOfElement.includes("people")) {
    dataDiv.innerHTML = `
      <p>My name is:</p>
      <h1>${currentPeopleInfo.name.first} ${currentPeopleInfo.name.last}</h1>
      `
  } else if (classOfElement.includes("email")) {
    dataDiv.innerHTML = `
      <p>My email address is:</p>
      <h1>${currentPeopleInfo.email}</h1>
      `
  } else if (classOfElement.includes("birthday")) {
    dataDiv.innerHTML = `
      <p>My age is:</p>
      <h1>${currentPeopleInfo.dob.age} years</h1>
      `
  } else if (classOfElement.includes("map")) {
    dataDiv.innerHTML = `
      <p>My address is:</p>
      <h1>${currentPeopleInfo.location.street.name}, ${currentPeopleInfo.location.city}</h1>
      `
  } else if (classOfElement.includes("phone")) {
    dataDiv.innerHTML = `
      <p>My phone number is:</p>
      <h1>${currentPeopleInfo.phone}</h1>
      `
  }

  if (selectedElement) {
    selectedElement.classList.remove("selecionado")
  }

  event.target.classList.add("selecionado")

  selectedElement = event.target
}

listIcons.forEach((item) => {
  item.addEventListener("mouseenter", mouseOverFunction)
})
