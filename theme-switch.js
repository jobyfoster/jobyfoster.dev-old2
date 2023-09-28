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
    let selectedTheme = localStorage.getItem("selected_theme"); //get the selected theme from local storage

    if (selectedTheme && (selectedTheme === "dark" || selectedTheme === "light")) { // if there is a them selected and it equals 'dark' or 'light'
        setTheme(selectedTheme); // set the theme to the currently selected one
    } else { //if theres no selected theme in localStorage or it does not equal 'dark' or 'light'
        setTheme("dark"); //set the theme to dark by default
    }
}

const setTheme = (theme) => {
    localStorage.setItem("selected_theme", theme) //set the localStorage key 'selected_item' to the value of 'theme'
    cssLink.setAttribute("href", `css/${theme}-theme.css`); //set current stylesheet on page
}

const switchTheme = () => {
    const currentTheme = localStorage.getItem("selected_theme"); //get the currently selected theme
    if (currentTheme === "dark") { //if the currentTheme is dark
        setTheme("light") //we switch the theme to light
    }
    if (currentTheme === "light") { //if the currentTheme is light
        setTheme("dark"); //we switch the theme to darm
    }
}


//initialize our theme on page load
initializeTheme();

//call switchTheme function when the themeSwitchButton is clicked
themeSwitchButton.addEventListener("click", switchTheme)