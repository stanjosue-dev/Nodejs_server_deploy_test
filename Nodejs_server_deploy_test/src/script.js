const p = document.getElementById('p');
p.textContent = 'Please wait server is starting...';

fetch('https://node-deployment-test-project.onrender.com/api')
.then(res => res.text())
.then(data => p.textContent = data)
.catch(err => {p.textContent = `erreur chargement : ${err}`})