function submitForm() {
    var password = document.querySelector('.password').value;
    if (password == 'night night') {
      alert("Hey tu! Da tu, am o rugăminte să îmbraci căștile ❤️❤️")
      alert("Okey, mersi ❤️❤️")
      window.location.href = "./page/page.html";
    } else {
      alert('Parola nu este corecta');
    }
}
