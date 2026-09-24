const sidebar = document.getElementById("sidebar");

const dl = document.getElementById("download");
dl.addEventListener("click", downloadPatch);


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

async function downloadPatch(){
    const a = document.createElement("a");
    a.style.display = 'none';
    a.href = "download/patch.zip";
    const name = "Hajimari_no_Ishi";
    a.download = name + ".zip";
    try {
        const info = await fetch("download/release_info.txt");
        if (info.ok){
            const data = await info.text();
            const version = data.split('\n')[0].split(' ')[2];
            a.download = name + "_v" + version + ".zip";
        }
    } catch (error) {
        console.log(error);
    }
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
