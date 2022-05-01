// Função que exetuca a troca Modo Claro <-> Modo Escuro

function darkMode() {
    changeClasses();
    changeTexts();

}

// Função secundária que executa a troca das cores - Modo Claro <-> Modo Escuro

function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

// Função secundária que executa a troca dos textos - Modo Claro <-> Modo Escuro

function changeTexts(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener ('click', darkMode);