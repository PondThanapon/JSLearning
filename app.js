
function submit() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log("submit!!!");
  console.log(username);
  console.log(password);

  if(username == "test" || password == "1234") {
    alert("welcome")
    location.href = "home.html"
  }else {
    alert("try agian")
  }


}