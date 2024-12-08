export{}
const toggleButton = document.getElementById('toggle-btn') as HTMLButtonElement|null;
const skillsList = document.getElementById('toggle-skills') as HTMLElement|null;

if(toggleButton && skillsList) {
    toggleButton.addEventListener( `click`, () => {
        if(skillsList.style.display === `none`){
            skillsList.style.display = `block`;
            toggleButton.value = "Hide Skills";
        } else {
            skillsList.style.display = `none`;
            toggleButton.value = "Show Skills";
        }
    })
}
    else{
        console.log("Required element not found in the DOM")
    }