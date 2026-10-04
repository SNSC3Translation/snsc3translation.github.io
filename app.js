const sidebar = document.getElementById("sidebar");

const dl = document.getElementById("download");
dl.addEventListener("click", downloadPatch);


const name = "Hajimari_no_Ishi";


async function getPatchInfo(){
    try {
        const info = await fetch("download/release_info.txt");
        if (info.ok){
            const data = await info.text();
            const version = data.split('\n')[0].split(' ')[2];
            const hash = data.split('\n')[5].split(' ')[1];
            return [version, hash];
        }
    } catch (error) {
        console.log(error);
        return ["", ""];
    }
    return ["", ""];
}

async function getChangeLog(){
    try {
        const info = await fetch("download/Changelog.txt");
        if (info.ok){
            const data = await info.text();
            return data;
        }
    } catch (error) {
        console.log(error);
        return "";
    }
    return "";
}

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


const patch_info = await getPatchInfo();
const e = document.getElementById('hash');
const e1 = document.getElementById('version');
e1.innerText = patch_info[0];
e.innerText = patch_info[1];

const changeLog = await getChangeLog();
const e2 = document.getElementById('changelog');
e2.value = changeLog;


async function downloadPatch(){
    const a = document.createElement("a");
    a.style.display = 'none';
    a.href = "download/patch.zip";
    if (patch_info[0]==="") {
        a.download = name + ".zip";
    } else {
        a.download = name + "_v" + patch_info[0] + ".zip";
    }
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

