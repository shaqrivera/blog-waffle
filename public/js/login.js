const loginSubmit = document.getElementById("loginSubmit");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

const loginQuery = (e) => {
    e.preventDefault();
  fetch("http://localhost:5001/api/login", {
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
          window.location.href = 'http://localhost:5001/dashboard';
      }
  );
};

loginSubmit.addEventListener("click", loginQuery);
