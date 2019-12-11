import { Message } from "../components/message";
import { Select } from "../components/selectAll";
import { Header } from "./header";
import { Username } from "../components/username";
import { NewMessage } from "../components/newMessage";
import { getMessage, getAllMessages, addMessage } from "../utilities/messages-service";

class Main {
    constructor() {
        this.node = document.createElement('main');

        
         //prikaze sve korisnike
         getMessage().then(data => {
            data.data.forEach(element => {
                this.message = new Message(element);
                this.node.appendChild(this.message.getNode());
            });
            scrollTo(0, this.node.scrollHeight);
        })
        
        
                                      
    } //konstruktor
    getNode() {
        return this.node;
    }
    clear() {
        this.node.innerHTML = '';
    }
} //klasa

export default new Main();