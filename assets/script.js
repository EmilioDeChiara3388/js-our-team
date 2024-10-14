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

let rowEl = document.querySelector(".members");

for (let i = 0; i < teamMembers.length; i++) {
  let teamMember = teamMembers[i];
  console.log(teamMember);
  let { name, role, email, img } = teamMember;
  let markup = `
      <div class="col-4">
        <div class="card bg-black text-light">
          <div class="row">
            <div class="col 3 py-0">
              <img src="${img}" alt="" class="member-pic">
            </div>
            <div class="col-8 p-0 align-middle">
              <h3 class="mb-1 fs-4">${name}</h3>
              <p class="mb-1">${role}</p>
              <p class="text-primary mb-1">${email}</p>
            </div>
          </div>
        </div>
      </div>
     `
  rowEl.innerHTML += markup;
}