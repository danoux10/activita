//link select Icon data
const selectIcon = document.getElementById("select-icon");
const selectedIcon = document.getElementById("selected-icon");
const optionsContainerIcon = document.getElementById("options-container-icon");

const optionsListIcon = document.querySelectorAll(".option-icon");
const iconCard = document.getElementById("preview-icon-add");

selectIcon.addEventListener("click", () => {
    optionsContainerIcon.classList.toggle("active");
});

optionsListIcon.forEach(o => {
    o.addEventListener("click", () => {
        selectedIcon.textContent = o.querySelector("input[type='radio']").value;
        optionsContainerIcon.classList.remove("active");
        iconCard.innerHTML = o.querySelector("label").innerHTML;
    });
});
