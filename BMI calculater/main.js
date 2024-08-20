function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var age = parseInt(document.getElementById("age").value);

    if (
      isNaN(weight) ||
      isNaN(height) ||
      isNaN(age) ||
      weight <= 0 ||
      height <= 0 ||
      age <= 0
    ) {
      alert("Please enter valid values for weight, height, and age.");
      return;
    }

    var bmi = weight / (height / 100) ** 2;
    var category;

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 24.9) {
      category = "Normal Weight";
    } else if (bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    document.getElementById("result").innerHTML =
      "Your BMI is: " +
      bmi.toFixed(2) +
      "<br>Category: " +
      category +
      "<br>Age: " +
      age;
  }

  function clearInputs() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";
    document.getElementById("result").innerHTML = "";
  }