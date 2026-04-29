function loginUser() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // check empty fields
  if (username === "" || password === "") {
    document.getElementById("error").innerText = "Please fill all fields";
    return false;
  }

  // ✅ accept any username & password
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("username", username);

  // redirect to homepage
  window.location.href = "index.html";
  return false;
}