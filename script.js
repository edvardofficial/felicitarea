function submitForm() {
    var password = document.querySelector('.password').value;
    if (password == 'night night') {
      alert("Night night ❤️❤️")
      window.location.href = "./page/page.html";
    } else {
      alert('Parola nu este corecta');
    }
}
