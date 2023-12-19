function darkMode(){
    let isDarkMode;
    if(localStorage.getItem("darkMode") !== null){
        isDarkMode = localStorage.getItem("darMode");
    }else{
        isDarkMode = false;
    }
    return isDarkMode;
}

export {darkMode}