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
// SEARCH TEMPLE SECTION ==================================================================
function searchTemple() {
//    const input = document.getElementById("templeInput").value.toLowerCase()
    const resultDiv = document.getElementById("result")
    resultDiv.innerHTML = ""
    fetch('travel_recommendation.json')
        .then(response => response.json())
        .then(data => {
            if (data.temples && data.temples.length > 0) {
                data.temples.forEach(temple => {
                    resultDiv.innerHTML += `
                        <h2>${temple.name}</h2>
                        <img src="${temple.imageUrl}" alt="${temple.name}">
                        <p><h4>${temple.description}</h4></p><br>
                `;
            });
        } else {
            resultDiv.innerHTML = "Temples not found.";
        }
    })
    .catch((error) => {
        console.error("Error:", error)
        resultDiv.innerHTML = "An error occurred while fetching data."
    })
}
  



btnSearch.addEventListener("click", searchCountry)
btnTemple.addEventListener("click", searchTemple)
btnBeach.addEventListener("click", searchBeach)