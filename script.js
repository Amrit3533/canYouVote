let ageInput = document.getElementById("age");
let result = document.getElementById("result");
let image = document.getElementById("image_result");
let nameInput = document.getElementById("name");

function checkEligibility() {
  let age = ageInput.value.trim();
  let userName = nameInput.value.trim();
  if (isNaN(age) || age === "" || age <= 0) {
    result.innerHTML = "<h3>Please enter a valid number for age.</h3>";
    image.src = "./images/error.avif";
    return;
  }
  age = Number(age);

  if (age >= 18) {
    result.innerHTML = `<h3>${userName}, You're eligible </h3>`;
    image.src = "./images/adult.jpg";
  } else {
    result.innerHTML = `<h3>${userName},You're not eligible </h3>`;
    image.src = "./images/below_18.jpg";
  }
}
