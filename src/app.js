//api url
const api_url = "https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=eur";

//Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById("loading").style.display = "none";
}

