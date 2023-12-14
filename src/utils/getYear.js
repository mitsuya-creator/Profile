let getYear;
window.addEventListener("load",function(){
    let date = new Date();
    getYear = date.getFullYear();
    return getYear;
})

export {getYear};