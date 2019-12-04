var URL = "https://coetus.herokuapp.com/api/message";

//prikazi sve poruke
function getMessage(){
        return fetch(`${URL}`).then(response => response.json(), error => console.error(error));
}
//doda poruku
function addMessage(username, message) {
    return fetch(`${URL}`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
          username: username,
          message: message, //to je poruka koju ubacujemo
        })
    })
    .then(response => response.json(), (error) => {
            console.log(error);
        })
}
//prikaze sve poruke sa odredjenim usernam-om
function getAllMessages(username) {
    return fetch(`${URL}`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
          username: username
        })
    })
    .then(response => response.json(), (error) => {
        console.log(error);
    })
}

export{
    getMessage, getAllMessages, addMessage
}






