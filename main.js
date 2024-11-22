let bouton = document.querySelector("#DarkModeButton");
let header = document.querySelector("#header")
let footer = document.querySelector("#footer")

bouton.addEventListener("click", function() {
    console.log("triggered")
    document.body.classList.toggle("DarkMode");
    header.classList.toggle("DarkMode");
    footer.classList.toggle("DarkMode");
})

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {

    tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('tab-active'));
        contents.forEach(content => content.classList.remove('active'));
        this.classList.add('tab-active');

        if (this.classList.contains('tab-description')) {
            document.querySelector('.description').classList.add('active');
        } else if (this.classList.contains('tab-stats')) {
            document.querySelector('.stats').classList.add('active');
        } else if (this.classList.contains('tab-history')) {
            document.querySelector('.history').classList.add('active');
        }
    });
});