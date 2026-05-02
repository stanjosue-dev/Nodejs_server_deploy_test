fetch('https://node-deployment-test-project.onrender.com/api')
.then(res => res.text())
.then(data => document.getElementById('p').textContent = data)
.catch(err => {document.getElementById('p').textContent = `erreur chargement : ${err}`})