//---------------------------------------------------
// GetulioHF - Travel Recommendation Web Application
//--------------------------------------------------- 
const btnSearch = document.getElementById("btnSearch")
const btnTemple = document.getElementById("btnTemple")
const btnBeach = document.getElementById("btnBeach")
const destinationInput = []

function btnClear() {
  document.getElementById("destinationInput").value = ""
  document.querySelector('input[name="destinationInput"]:checked').checked = false
}

// SEARCH COUNTRY SECTION =================================================================
function searchCountry() {
    const input = document.getElementById("destinationInput").value.toLowerCase()
    const resultDiv = document.getElementById("result")
    resultDiv.innerHTML = ""
    fetch('travel_recommendation.json')
        .then(response => response.json())
        .then(data => {
            const country = data.countries.find((item) => item.name.toLowerCase() === input);
            if (country) {
                country.cities.forEach(city => {resultDiv.innerHTML += `
                    <h2>${city.name}</h2>
                    <img src="${city.imageUrl}" alt="${city.name}" 
                    <p><h4>${city.description}</h4></p><br>
                `});
        } else {
            resultDiv.innerHTML = "Destination not found or not informed."
        }
        })
    .catch((error) => {
        console.error("Error:", error)
        resultDiv.innerHTML = "An error occurred while fetching data."
    })
}
// SEARCH TEMPLES SECTION ==================================================================
function listTemples() {
    // Make sure this ID exists in your HTML: <div id="templeResult"></div>
    const resultDiv = document.getElementById("templeResult");
    resultDiv.innerHTML = "";

    fetch('travel_recommendation.json')
        .then(response => {
            // Always check that the response is OK before parsing
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Verify the JSON structure
            if (data.temples && Array.isArray(data.temples) && data.temples.length > 0) {
                let html = "";
                data.temples.forEach(temple => {
                    html += `
                        <h2>${temple.name}</h2>
                        <img src="${temple.imageUrl}" alt="Image of ${temple.name}">
                        <p>${temple.description}</p><br>
                    `;
                });
                resultDiv.innerHTML = html;
            } else {
                resultDiv.innerHTML = "Temples not found.";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            resultDiv.innerHTML = "An error occurred while fetching data.";
        });
}
  
// SEARCH BEACHES SECTION ==================================================================
function listBeaches() {
    // Make sure this ID exists in your HTML: <div id="beachResult"></div>
    const resultDiv = document.getElementById("beachResult");
    resultDiv.innerHTML = "";

    fetch('travel_recommendation.json')
        .then(response => {
            // Always check that the response is OK before parsing
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Verify the JSON structure
            if (data.beaches && Array.isArray(data.beaches) && data.beaches.length > 0) {
                let html = "";
                data.beaches.forEach(beach => {
                    html += `
                        <h2>${beach.name}</h2>
                        <img src="${beach.imageUrl}" alt="Image of ${beach.name}">
                        <p>${beach.description}</p><br>
                    `;
                });
                resultDiv.innerHTML = html;
            } else {
                resultDiv.innerHTML = "Beaches not found.";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            resultDiv.innerHTML = "An error occurred while fetching data.";
        });
}



btnSearch.addEventListener("click", searchCountry)
btnTemple.addEventListener("click", searchTemple)
btnBeach.addEventListener("click", searchBeach)