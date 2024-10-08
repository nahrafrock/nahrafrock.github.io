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
