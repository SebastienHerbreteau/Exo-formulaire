//   ----------------------FORMULAIRE----------------------------

document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();
  // ----------------------NOM PRENOM----------------------------
  if (
    document.querySelector("#nom").value.length < 2 ||
    document.querySelector("#prenom").value.length < 2
  ) {
    document.querySelector(".alertnp").textContent =
      "*Veuillez saisir un minimum de 2 caractères pour chaque champs.";
  } else {
    document.querySelector(".alertnp").textContent = "";
  }
  //   ----------------------GENRE----------------------------
  if (
    document.querySelector("#homme").checked == false &&
    document.querySelector("#femme").checked == false
  ) {
    document.querySelector(".alertgenre").textContent =
      "*Veuillez faire un choix.";
  } else {
    document.querySelector(".alertgenre").textContent = "";
  }

  //   ----------------------HEROS----------------------------
  if (document.querySelector("#heros").value == "-") {
    document.querySelector(".alertheros").textContent =
      "*Veuillez séléctionner un super-héros";
  } else {
    document.querySelector(".alertheros").textContent = "";
  }
  //   ----------------------POLITIC----------------------------
  if (document.querySelector("#politic").checked == false) {
    document.querySelector(".alertpolitic").textContent =
      "*Veuillez cocher la case.";
  } else {
    document.querySelector(".alertpolitic").textContent = "";
  }
  //   ----------------------WHY----------------------------
  if (document.querySelector("#why").value.length < 50) {
    document.querySelector(".alertwhy").textContent =
      "*Votre message doit contenir au minimum 50 caractères.";
  } else {
    document.querySelector(".alertwhy").textContent = "";
  }
  //   ----------------------COLOR----------------------------
  if (loremOf.classList.contains("vide")) {
    document.querySelector(".alertColor").textContent =
      "*Veuillez choisir une couleur.";
  } else {
    document.querySelector(".alertColor").textContent = "";
  }
  //--------------RESET-------------------------------------------

  document.querySelector("form").reset();
  loremOf.classList.remove("rougep", "vertp", "jaunep");
  youAre.innerHTML = "";
  document.querySelector(".motiv").innerHTML = "";
});

//-----------------YOU ARE ------------------------------------------
let nom = document.querySelector("#nom");
let prenom = document.querySelector("#prenom");

nom.addEventListener("click", () => {
  nom.focus("Entrez votre prénom");
});

let radio = document.querySelectorAll("input[type=radio]");
let youAre = document.querySelector(".youare");

radio.forEach((item) => {
  item.addEventListener("change", () => {
    youAre.innerHTML = "Vous avez déclaré être une/un " + item.value;
  });
});

//   ----------------------BOUTONS----------------------------
let loremOf = document.querySelector("#lorem");

document.querySelector(".rouge").addEventListener("click", (e) => {
  e.preventDefault();
  loremOf.classList.remove("vide", "rougep", "vertp", "jaunep");
  loremOf.classList.toggle("rougep");
  document.querySelector(".alertColor").textContent = "";
});

document.querySelector(".vert").addEventListener("click", (e) => {
  e.preventDefault();
  loremOf.classList.remove("vide", "rougep", "vertp", "jaunep");
  loremOf.classList.toggle("vertp");
  document.querySelector(".alertColor").textContent = "";
});

document.querySelector(".jaune").addEventListener("click", (e) => {
  e.preventDefault();
  loremOf.classList.remove("vide", "rougep", "vertp", "jaunep");
  loremOf.classList.toggle("jaunep");
  document.querySelector(".alertColor").textContent = "";
});

//--------------CV----------------------------------------------------
var motiv = document.querySelector(".motiv");

document.querySelector("#send").addEventListener("click", () => {
  motiv.innerHTML =
    "<select id=select name =select> <option id=option0>-</option><option id=option1>Un CV</option> <option id=option2>Une lettre de motivation</option> <option id=option3>Un CV et une LM.</option></select>";
});

// let option1 = document.querySelector("#option1");
// let option2 = document.querySelector("#option2");
// let option3 = document.querySelector("#option3");
// let send2 = document.querySelector("#send2");

// option1.addEventListener("input", (e) => {
//   console.log(e);
//   // send2.textContent += "Un CV";
// });
