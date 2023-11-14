const infos = document.getElementById("general-datas")

function randomUser() {
  const url = "https://randomuser.me/api/"
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results[0])
    .then((people) => {
      console.log(people)
      loadInfos(people)
    })
    .catch((error) => console.error("Erro na requisição:", error))
}

randomUser()

function loadInfos(people) {
  const newHtml = `
    <div class="photo">
      <img src="${people.picture.large}" alt="" />
    </div>

    <div class="data">
      <p>My name is:</p>
      <h1>${people.name.first} ${people.name.last}</h1>
    </div>
    
    `

  infos.innerHTML += newHtml
}
