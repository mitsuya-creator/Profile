const root = document.querySelector("html");
let darkMode;

function toggleDarkMode() {
    if (root.classList.contains("dark")) {
        root.classList.remove("dark");
        localStorage.setItem("isDarkMode", root.classList.contains("dark"));
        return;
    }
    if (localStorage.isDarkMode == "true") {
        root.classList.add("dark");
        return;
    }
    root.classList.add("dark");
    localStorage.setItem("isDarkMode", root.classList.contains("dark"));
}
window.addEventListener("load", function () {
    if (this.localStorage.isDarkMode == "false") return;
    if (this.localStorage.getItem("isDarkMode") != null) {
        toggleDarkMode();
    }
    if(localStorage.isDarkMode == "true"){
        darkMode = true;
    }else{
        darkMode = false;
    }
})

export {darkMode,toggleDarkMode}