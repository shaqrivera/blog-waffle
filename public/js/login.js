const loginSubmit = document.getElementById("loginSubmit");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const signUpEmail = document.getElementById("signUpEmail");
const signUpPassword = document.getElementById("signUpPassword");
const signUpUsername = document.getElementById("signUpUsername");
const signUpSubmit = document.getElementById("signUpSubmit");

const loginQuery = (e) => {
    e.preventDefault();
  fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: loginEmail.value,
      password: loginPassword.value,
    }),
  }).then(
      (res)=>{
          window.location.href = '/dashboard';
      }
  );
};

signUpQuery = (e) => {
  e.preventDefault();
  fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: signUpUsername.value,
      email: signUpEmail.value,
      password: signUpPassword.value,
    }),
  }).then(
      (res)=>{
          if(res.ok){
          window.location.href = '/dashboard';
        }
      }
  );
};

signUpSubmit.addEventListener('click', signUpQuery);
loginSubmit.addEventListener("click", loginQuery);
