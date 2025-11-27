const btnSearch = document.getElementById("btnSearch")
const destinationInput = []

function btnClear() {
  document.getElementById("destinationInput").value = ""
  document.querySelector('input[name="destinationInput"]:checked').checked = false
}

function searchCondition() {
  const input = document.getElementById("destinationInput").value.toLowerCase()
  const resultDiv = document.getElementById("result")
  resultDiv.innerHTML = ""

  fetch("travel_recommendation.json")
    .then(response => response.json())
    .then(data => {
      const description = data.countries.find((item) => item.name.toLowerCase() === input);

      if (description) {
        const symptoms = condition.symptoms.join(", ")
        const prevention = condition.prevention.join(", ")
        const treatment = condition.treatment

        resultDiv.innerHTML += `<h2>${description.destinationInput}</h2>`
        resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`
        resultDiv.innerHTML += `<p><strong>Description:</strong> ${destinationInput}</p>`
      } else {
        resultDiv.innerHTML = "Destination not found."
      }
    })
    .catch((error) => {
      console.error("Error:", error)
      resultDiv.innerHTML = "An error occurred while fetching data."
    })
}
btnSearch.addEventListener("click", searchCondition)

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