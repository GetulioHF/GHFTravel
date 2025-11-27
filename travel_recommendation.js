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
        // Show country name
        resultDiv.innerHTML += `<h2>${country.name}</h2>`;
        // Show cities for that country
        resultDiv.innerHTML += `<h3>Cities:</h3>`;
        country.cities.forEach(city => {
          resultDiv.innerHTML += `
            <div>
              <h4>${city.name}</h4>
              ${city.imageUrl}
              <p>${city.description}</p>
            </div>
          `;
        });
      } else {
        resultDiv.innerHTML = "GETULIO - Destination not found."
      }
    })
    .catch((error) => {
      console.error("Error:", error)
      resultDiv.innerHTML = "An error occurred while fetching data."
    })
}
btnSearch.addEventListener("click", searchCountry)

function generateReport() {
  const numPatients = patients.length
  const conditionsCount = {
    Diabetes: 0,
    Thyroid: 0,
    "High Blood Pressure": 0,
  }

  for (const patient of patients) {
    conditionsCount[patient.condition]++
    genderConditionsCount[patient.gender][patient.condition]++
  }

  report.innerHTML = `Number of patients: ${numPatients}<br><br>`
  report.innerHTML += `Conditions Breakdown:<br>`
  for (const condition in conditionsCount) {
    report.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`
  }

}

// addPatientButton.addEventListener("click", addPatient)