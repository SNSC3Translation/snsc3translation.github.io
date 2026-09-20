const sidebar = document.getElementById("sidebar");


function toggleSubMenu(button) {
    if (!button.nextElementSibling.classList.contains("show")) {
        Array.from(sidebar.getElementsByClassName("show")).forEach(ul => {
            ul.classList.remove("show");
            ul.previousElementSibling.classList.remove("rotate");
        });
    }

    button.nextElementSibling.classList.toggle("show");
    button.classList.toggle("rotate");
}
