const btnEl = document.getElementById("btn");

const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;

  if (birthdayValue === "") {
    alert("please enter your birth Date");
  } else {
    let age = getAge(birthdayValue);
    resultEl.innerText = `Your Age is ${age} ${age > 1 ? "years" : "year"} `;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthDate.getFullYear;
  const month = currentDate.getMonth() - birthDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

btnEl.addEventListener("click", calculateAge);
