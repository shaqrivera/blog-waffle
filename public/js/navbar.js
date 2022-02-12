const homeButton = document.getElementById("homeButton");
const dashboardButton = document.getElementById("dashboardButton");
const logInSignUpButton = document.getElementById("logInSignUpButton");
const logOutButton = document.getElementById("logOut");

const homeQuery = () => {
  window.location.href = "http://localhost:5001/";
};
const dashboardQuery = () => {
  window.location.href = "http://localhost:5001/dashboard";
};
const logInSignUpQuery = () => {
  window.location.href = "http://localhost:5001/login";
};
const logOutButtonQuery = async () => {
  await fetch("http://localhost:5001/api/login", {
    method: "DELETE"
  })
  window.location.href = 'http://localhost:5001/login'
};

homeButton.addEventListener("click", homeQuery);
dashboardButton.addEventListener("click", dashboardQuery);
if(logInSignUpButton){
logInSignUpButton.addEventListener("click", logInSignUpQuery);
};
if(logOutButton){
logOutButton.addEventListener("click", logOutButtonQuery);
};