const themeSwitchButton = document.getElementById("theme-switch-svg");
const cssLink = document.getElementById("stylesheet");

//OLD CODE
// function hasSelectedStyleSheet() { //returns if they have selected a stylesheet
//     return (localStorage.getItem("selected_theme"))
// }

// if(!hasSelectedStyleSheet()) { //if they havent selected a stylesheet
//     localStorage.setItem("selected_theme", "dark"); // give them dark theme
// }

// let currentTheme = getCurrentTheme();

// if(currentTheme === "dark") {
//     cssLink.setAttribute("href", "css/dark-theme.css");
// }

// if (currentTheme === "light") {
//     cssLink.setAttribute("href", "css/light-theme.css");
// }


// function getCurrentTheme() {
//     let hasDarkThemeSelected = (localStorage.getItem("selected_theme") === "dark");

//     let hasLightThemeSelected = (localStorage.getItem("selected_theme") === "light");

//     if (hasDarkThemeSelected) {
//         return "dark";
//     } else if (hasLightThemeSelected) {
//         return "light";
//     } else {
//         correctStyleSheet();
//         getCurrentTheme();
//     }
// }

// function correctStyleSheet() {
//     if (localStorage.getItem("selected_theme") === "dark") {
//         cssLink.setAttribute("href", "css/dark-theme.css");
//     }
//     if (localStorage.getItem("selected_theme" === "light")) {
//         cssLink.setAttribute("href", "css/light-theme.css");
//     }
// }

// function setLocalStorage(theme) {
//     if (theme === "dark") {
//         localStorage.setItem("selected_theme", "dark");
//     }
//     if (theme === "light") {
//         localStorage.setItem("selected_theme", "light");
//     }
// }

// function switchTheme() {
//     let currentTheme = getCurrentTheme();
//     if (currentTheme === "dark"){
//         setLocalStorage("light");
//         cssLink.setAttribute("href", "css/light-theme.css");
//     } else {
//         setLocalStorage("dark");
//         cssLink.setAttribute("href", "css/dark-theme.css");
//     }
// }

//NEW CODE ~ WE LIKE TO SHOW PROGRESS AROUND HERE.
const initializeTheme = () => {
    let selectedTheme = localStorage.getItem("selected_theme");

    if (selectedTheme && (selectedTheme === "dark" || selectedTheme === "light")) {
        setTheme(selectedTheme);
    } else {
        setTheme("dark");
    }
}

const setTheme = (theme) => {
    localStorage.setItem("selected_theme", theme)
    cssLink.setAttribute("href", `css/${theme}-theme.css`);
}

const switchTheme = () => {
    const currentTheme = localStorage.getItem("selected_theme");
    if (currentTheme === "dark") {
        setTheme("light")
    }
    if (currentTheme === "light") {
        setTheme("dark");
    }
}

initializeTheme();

themeSwitchButton.addEventListener("click", switchTheme)