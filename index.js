let burger = document.getElementById("burger");
let line1 = document.getElementById("line1")
let line2 = document.getElementById("line2")
let line3 = document.getElementById("line3")
let nav = document.getElementById("nav-menu")
let navLink = document.getElementsByClassName("navLink");
let preLoader = document.getElementById("preLoader");
window.onload = () => {
    preLoader.style.display = "none"
}
burger.addEventListener("click",()=>{
    if(line2.style.display == "none"){
        line2.style.display = "block"
        line1.style.transform = "none"
        line3.style.transform = "none"
        nav.style.transform = "translateY(-100%)"
    }
    else{
        line2.style.display = "none"
        line1.style.transform = "rotate(45deg) translateY(2px) translateX(6px)"
        line3.style.transform = "rotate(-45deg) translate(6px)"
        nav.style.transform = "translateY(0%)"
        for(let i = 0; i <= navLink.length; i ++){
            navLink[i].addEventListener("click",()=>{
                line2.style.display = "block"
                line1.style.transform = "none"
                line3.style.transform = "none"
                nav.style.transform = "translateY(-100%)"
            })
        }
    }
})