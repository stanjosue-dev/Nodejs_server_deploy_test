fetch('http://localhost:3000/api')
.then(res => res.text())
.then(data => document.getElementById('p').textContent = data)
.catch(err => {document.getElementById('p').textContent = `erreur chargement : ${err}`})