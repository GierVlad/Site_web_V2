let form = document.querySelector("form")
let pseudo = document.querySelector("#pseudo")
let password = document.querySelector("#password")
let password2 = document.querySelector("#password2")

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Evoie détecté.")
    if (pseudo.value.length < 6){
        console.log("pas bon prenom")
    }
    if (password.value != password2.value || password.value.length < 8 || password2.value.length < 8) {
        console.log("pas bon mdp")
    }

})


