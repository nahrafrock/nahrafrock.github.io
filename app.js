document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for (const image of images){
        fetch(N/A)
        .then(response => response.json())
        .then(data => {
            image.src = data.message
            image.width = 100;
            image.height = 100;
        })
    }
})


function navigateToLink() {
    var select = document.getElementById("dropdown");
    var url = select.options[select.selectedIndex].value;
    if (url) {
        window.location.href = url;
    }
}

function randomPage() {
    const pages = [
        "index.html",
        "indo.html",
        "phil.html",
        "cambodia.html",
        "thai.html"
    ];
    const randomIndex = Math.floor(Math.random() * pages.length);
    window.location.href = pages[randomIndex];
}

function redirectToPage() {
    const selectElements = ['AG', 'countries'];

    selectElements.forEach(id => {
        const selectElement = document.getElementById(id);
        if (selectElement) {
            selectElement.onchange = function () {
                const selectedValue = selectElement.value;
                if (selectedValue) {
                    location.href = selectedValue;
                }
            }
        }
    });
}

