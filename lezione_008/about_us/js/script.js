/*<div class="card">
    <img src="https://i.pravatar.cc/150?img=1" alt="Avatar di Mario Rossi" class="avatar />"
    <h2>Mario Rossi<h2>
    <p><strong>Email:</strong> mario.rossi@exemple.com</p>
    <p><strong>Azienda:</strong> Rossi S.p.A.</p>
    <p><strong>Città:</strong> Roma<p/>
</div> */ 

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log(response)
        return response.json()
    }).then(users => {
        /*console.log(users.name)
        console.log(users.address)
        console.log(users.address.geo)*/
    
    const card = '<div class="card">
        <img src="https://i.pravatar.cc/150?img=1" alt="Avatar di Mario Rossi" class="avatar />"
        <h2>Mario Rossi<h2>
        <p><strong>Email:</strong> mario.rossi@exemple.com</p>            <p><strong>Azienda:</strong> Rossi S.p.A.</p>
        <p><strong>Città:</strong> Roma<p/>
        </div> '
        
    })


