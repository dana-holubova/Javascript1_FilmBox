const menuTlacitko = document.querySelector("#menu-tlacitko")

const menuPolozky = document.querySelector("#menu-polozky")
//menuPolozky.classList.add("show")

const menuHandle = () => {
    menuPolozky.classList.toggle("show")
    //dokončit
    //document.querySelector(".fa-bars").classList.toggle("fa-bars")
}

menuTlacitko.addEventListener("click", menuHandle)

