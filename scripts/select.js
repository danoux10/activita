//link select add data
const selectedAdd = document.getElementById("selected-add");
const optionsContainerAdd = document.getElementById("options-container-add");

const optionsListAdd = document.querySelectorAll(".option-add");

selectedAdd.addEventListener("click", () => {
    optionsContainerAdd.classList.toggle("active");
});

optionsListAdd.forEach(o => {
    o.addEventListener("click", () => {
        selectedAdd.innerHTML = o.querySelector("label").innerHTML;
        optionsContainerAdd.classList.remove("active");
    });
});

//link select update data
const selectedUpdate = document.getElementById("selected-update");
const optionsContainerUpdate = document.getElementById("options-container-update");

const optionsListUpdate = document.querySelectorAll(".option-update");

selectedUpdate.addEventListener("click", () => {
    optionsContainerUpdate.classList.toggle("active");
});

optionsListUpdate.forEach(o => {
    o.addEventListener("click", () => {
        selectedUpdate.innerHTML = o.querySelector("label").innerHTML;
        optionsContainerUpdate.classList.remove("active");
    });
});

//link select select data
const selectedSel = document.getElementById("selected-sel");
const optionsContainerSel = document.getElementById("options-container-sel");

const optionsListSel = document.querySelectorAll(".option-sel");

selectedSel.addEventListener("click", () => {
    optionsContainerSel.classList.toggle("active");
});

optionsListSel.forEach(o => {
    o.addEventListener("click", () => {
        selectedSel.innerHTML = o.querySelector("label").innerHTML;
        optionsContainerSel.classList.remove("active");
    });
});
