// Add your code here

function submitData(username, userEmail){
    const userData = {
        name: username,
        email: userEmail,
    };
    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(userData),
    };

    return fetch('http://localhost:3000/users', configurationObject)
    .then(resp => resp.json())
    .then(function(jsonObj){
        const body = document.querySelector('body');
        const p = document.createElement('p');

        p.innerHTML = jsonObj.id;

        body.appendChild(p);
    
    })
    .catch(function(error){
        const body = document.querySelector('body');
        const p = document.createElement('p');

        p.innerHTML = error.message;

        body.appendChild(p);
    })


}