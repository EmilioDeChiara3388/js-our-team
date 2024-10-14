//console.log("Funzioni?");

/* 
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)
*/

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

let rowEl = document.querySelector(".row");

for (let i = 0; i < teamMembers.length; i++) {
    let teamMember = teamMembers[i];
    console.log(teamMember);
    let {name, role, email, img} = teamMember;
    let markup = `
    <div class="col-4">
      <div class="card bg-dark text-light">
        <img src="${img}" alt="" class="member-pic p-0">
        <h3>${name}</h3>
        <p>${role}</p>
        <p class="text-primary">${email}</p>
        </div>
    </div>
    `
    rowEl.innerHTML += markup;

}