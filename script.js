function submitForm() {
    var password = document.querySelector('.password').value;
    if (password == 'night night') {
      alert("Hey tu! Da tu, zâmbește că acest site este făcut pentru tine ❤️❤️")
      alert("Iată așa să te văd ❤️❤️")
      window.location.href = "./page/page.html";
    } else {
      alert('Parola nu este corecta');
    }
}
