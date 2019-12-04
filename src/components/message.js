class Message{
    constructor(data) {
        this.node = document.createElement('message');

        this.username = data.username;
        this.message = data.message;
        this.timestamp = data.timestamp;

        this.banner = document.createElement('h3');
        this.banner.textContent = `${this.username}`;

        this.txtmessage = document.createElement('p');
        this.txtmessage.innerHTML = this.message;

        this.txtTimestamp = document.createElement('label');
        this.txtTimestamp.textContent = new Date(this.timestamp).toLocaleTimeString('sr-Cyrl',{hour12:true});   

        this.node.appendChild(this.banner);
        this.node.appendChild(this.txtmessage);
        this.node.appendChild(this.txtTimestamp);

    }
    getNode(){
        return this.node;
    }
}

export{
    Message
}

