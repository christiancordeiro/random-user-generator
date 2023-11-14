const listIcons = document.querySelectorAll(".icons ul li")

function mouseOverFunction(event) {
  const classOfElement = event.target.className
  const dataDiv = infos.querySelector(".data")

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
}

listIcons.forEach((item) => {
  item.addEventListener("mouseenter", mouseOverFunction)
})
