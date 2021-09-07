const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'chargement...';

   const serviceID = 'default_service';
   const templateID = 'formcontact';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Envoyer';
      alert('envoye!');
    }, (err) => {
      btn.value = 'Envouyer';
      alert(JSON.stringify(err));
    });
});
