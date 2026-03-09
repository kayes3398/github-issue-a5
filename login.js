console.log('login function')
document.getElementById('sing-in').addEventListener('click', function () {
  const login = document.getElementById('input-admin');
  const adminId = login.value;
  console.log(adminId);
  const inputpass = document.getElementById('input-pass');
  const password = inputpass.value;
  console.log(password);
  if (adminId == "admin" && password == "admin123") {
    alert('login Success');
    window.location.assign('/home.html')
  } else {
    alert('login failed');
    return;
  }

})