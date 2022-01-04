
// Listens for any messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'chooseImage')
    {
        const allImages = document.getElementsByTagName("img");
        console.log(allImages[0].src);
        for (let i = 0; i < allImages.length; i++)
        {
            // if a picture is hovered over, send its src to the popup
            allImages[i].addEventListener('mouseover', () => {
                console.log(allImages[i].src);
                sendResponse(allImages[i].src);
            });
        }
    }
    return true;
});