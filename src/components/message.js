class Message{
    constructor(data) {
        this.node = document.createElement('div');
        this.node.className = 'message';

        /*
            CREATE MESSAGE
            <div class="message">
                <h4>Username:</h4>
                <p>Hello. How are you today?</p>
                <span class="time-right">11:00</span>
            </div>
        */

        this.username = data.username;
        this.message = data.message;
        this.timestamp = data.timestamp;

        this.banner = document.createElement('h4');
        this.banner.textContent = `${this.username}`;

        this.txtmessage = document.createElement('p');
        this.txtmessage.innerHTML = this.message;

        this.txtTimestamp = document.createElement('span');
        this.txtTimestamp.className = 'time-right';
        this.txtTimestamp.textContent = new Date(this.timestamp).toLocaleTimeString('en-US',{hour12:true})

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

