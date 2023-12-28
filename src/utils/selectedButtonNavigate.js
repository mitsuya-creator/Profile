function selectedButtonNavigate(pathname) {
    const buttons = document.querySelectorAll(".button-navigation a");
    const svg = document.querySelectorAll(".button-navigation a section svg")
    let selectedButton;
    buttons.forEach((element, index) => {
        if (element.getAttribute("href") == pathname) {
            svg[index].classList.add("fill-violet-aeu", "stroke-violet-aeu")
            selectedButton = index;
        } else if (index != selectedButton) {
            svg[index].classList.remove("fill-violet-aeu", "stroke-violet-aeu")
        } else {
            svg[index].classList.remove("fill-violet-aeu", "stroke-violet-aeu")
        }
    });
}

export { selectedButtonNavigate };