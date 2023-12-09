const menuTlacitko = document.querySelector("#menu-tlacitko")

const menuPolozky = document.querySelector("#menu-polozky")

const menuTlacitkoIkona = document.querySelector(".fa-bars")

const menuHandle = () => {
    menuPolozky.classList.toggle("show")
    menuTlacitkoIkona.classList.toggle("fa-bars")
    menuTlacitkoIkona.classList.toggle("fa-xmark")
}

menuTlacitko.addEventListener("click", menuHandle)

