const homeButton = document.getElementById("homeButton");
const dashboardButton = document.getElementById("dashboardButton");
const logInSignUpButton = document.getElementById("logInSignUpButton");
const logOutButton = document.getElementById("logOut");

const homeQuery = () => {
  window.location.href = "/";
};
const dashboardQuery = () => {
  window.location.href = "/dashboard";
};
const logInSignUpQuery = () => {
  window.location.href = "/login";
};
const logOutButtonQuery = async () => {
  await fetch("/api/login", {
    method: "DELETE"
  })
  window.location.href = '/login'
};

homeButton.addEventListener("click", homeQuery);
dashboardButton.addEventListener("click", dashboardQuery);
if(logInSignUpButton){
logInSignUpButton.addEventListener("click", logInSignUpQuery);
};
if(logOutButton){
logOutButton.addEventListener("click", logOutButtonQuery);
};