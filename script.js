let url = "https://665737379f970b3b36c86978.mockapi.io/quis";
let errorName = document.querySelector("#errorName");
let errorUser = document.querySelector("#errorUser");

let errorEmail = document.querySelector("#errorEmail");
let errorPassword = document.querySelector("#errorPassword");
let first = document.querySelector("#firstName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let user = document.querySelector("#user");
Login;
function validPassword(params) {
  let r = /^[0-9]{5,}$/;
  let req = /^[a-z0-9]$/;
  if (!params.match(r)) {
    errorPassword.innerText = "must be at least 4 number";
    return false;
  } else {
    errorPassword.innerText = "";
    return true;
  }
}

function validEmail(params) {
  let re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

  //   let r = /^[a-zA-Z0-9]+@[a-zA-Z0-9]\.[a-zA-Z]{2,4}$/
  if (!params.match(re)) {
    errorEmail.innerText = "Please enter vaild an email";
    return false;
  } else {
    errorEmail.innerText = "";
    return true;
  }
}

// ---------------user
function validUser(params) {
  let r = /^[A-Z]+$/g;
  let req = /^[a-z0-9+_.-]$/;
  if (!params.match(r) && !params.match(req)) {
    errorUser.innerText = "must be at least one charchter Upper";
    return false;
  } else {
    errorUser.innerText = "";
    return true;
  }
}

// -----------------name
function validName(params) {
  let req = /^[A-Za-z]{4,}$/;
  if (!params.match(req)) {
    errorName.innerText = "must be more 3 charchters";
    return false;
  } else {
    errorName.innerText = "";
    return true;
  }
}

function sign() {
  let empty = document.querySelector("#errorempty");
  if (
    user.value == "" ||
    email.value == "" ||
    password.value == "" ||
    first.value == ""
  ) {
    empty.innerText = "must be all file not empty";
  } else if (validEmail && validName && validPassword && validUser) {
    empty.innerText = "";

    post();
  }
}

async function post() {
  let data = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      user: user.value,
      email: email.value,
      name: first.value,
      password: password.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let a = await data.json();
  window.location.href = "login.html";
  console.log(a);
}
