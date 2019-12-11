import Main from "./main";
import { Header } from "./header";

class Dashboard{
    constructor(){
        this.node = document.createElement('dashboard');
        this.heder = new Header();
        this.node.appendChild(this.heder.getNode());
        
        this.node.appendChild(Main.getNode());
        
    }

    getNode(){
        return this.node;
    }
}

export {
    Dashboard
}