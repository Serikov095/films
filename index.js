const searchInput = document.querySelector("#search");
const divs = document.querySelectorAll(".movie");

searchInput.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();
//Если не понятно нужно возвратиться Модуль 5 26 урок!
    divs.forEach(item => {
     item.querySelector("p").textContent.toLocaleLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })
    
})

