const root = document.querySelector("html")
root.setAttribute("class", "")
export function toggleDarkMode() {
    root.classList.contains("dark") ? root.classList.remove("dark") : root.classList.add("dark")
}
