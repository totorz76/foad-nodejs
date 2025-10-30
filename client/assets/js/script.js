let currentDiapoIndex = 0;

function showDiapo(currentDiapoIndexParametre) {
    const diapos = document.querySelectorAll(".diapo");

    diapos.forEach(
        (diapo) => {diapo.style.display = "none"}
    );

    if (currentDiapoIndexParametre >= diapos.length) {
        currentDiapoIndex = 0;
    } else if (currentDiapoIndexParametre < 0) {
        currentDiapoIndex = diapos.length -1;
    } 
 
    diapos[currentDiapoIndex].style.display = "block";
}


document.querySelector('.precedent').addEventListener('click',() => {
    showDiapo(currentDiapoIndex = currentDiapoIndex - 1);
});

document.querySelector('.suivant').addEventListener('click',() => {
    showDiapo(currentDiapoIndex = currentDiapoIndex + 1);
});

fetch("/api/users")
  .then((reponse) => reponse.json())
  .then((data) => {
    //console.log(data);
    let outputHtml = '';
    data.forEach(
      user => {
        outputHtml += `
            <div class="diapo">
            <figure class="user">
                <h2>${user.prenom} ${user.nom}</h2>
                <p>${user.age}</p>
                <img src="${user.avatar}" alt="${user.prenom} ${user.nom}">
                <figcaption>${user.email}</figcaption>
                <h3>Adresse</h3>
                <p>${user.rue}</p>
                <p>${user.ville}</p>
                <p>${user.pays}</p>
            </figure>
            </div>
            `;
      }
    );
    document.getElementById("users").innerHTML = outputHtml;
    showDiapo(currentDiapoIndex);
  })
  .catch((error) => {
    console.log(error);
  });