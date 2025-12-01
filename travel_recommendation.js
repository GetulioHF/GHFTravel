const btnSearch = document.getElementById("btnSearch")
const destinationInput = []

function btnClear() {
  document.getElementById("destinationInput").value = ""
  document.querySelector('input[name="destinationInput"]:checked').checked = false
}

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
                <p>${city.description}</p><br>
            `});
      } else {
        resultDiv.innerHTML = "Destination not found."
      }
    })
    .catch((error) => {
        console.error("Error:", error)
        resultDiv.innerHTML = "An error occurred while fetching data."
    })
}
btnSearch.addEventListener("click", searchCountry)