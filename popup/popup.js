// Object
var data = [];


// Obtaining src of the chosen image after clicking the "+" button. 
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".b3").addEventListener("click", () => {
        chrome.tabs.query({ currentWindow: true, active: true }, gotTab);
    });
});

function gotTab(tabs) {
    console.log(tabs);
    chrome.tabs.sendMessage(tabs[0].id, { action: "chooseImage" }, response => {
        // src of image is returned (held in the response variable);
        console.log(response);
        var image = document.querySelector(".item-image");
        image.src = response;
        image.classList.remove("hidden");

        // Save
        var element = document.querySelector(".saveButton");
        element.addEventListener("click", () => {
            element.style.color = "aqua";
            window.open("http://localhost:3000/");
        });

        // Store retailer name, product name and picture src in JS object
        let info = {
            retailer: document.querySelector(".ret").value,
            product: document.querySelector(".prod").value,
            src: response
        }
        data.push(info);
        console.log(data[0].retailer)
    

    });
}


export { data }

