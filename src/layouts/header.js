import { Username } from "../components/username";
import { NewMessage } from "../components/newMessage";
import { Select } from "../components/selectAll";
import { getMessage, getAllMessages, addMessage } from "../utilities/messages-service";
import { Message } from "../components/message";
import Main from "./main";
import { Dashboard } from "./dashboard";

class Header{
    constructor(){
        this.node = document.createElement('header');

        let username = new Username;
        this.node.appendChild(username.getNode());

        let newMessage = new NewMessage;
        this.node.appendChild(newMessage.getNode())

        let select = new Select;
        this.node.appendChild(select.getNode());

        
        let username1;
        //da sacuva vrednost usernam-a
        username.selectBtnOnClick(() => {
            username1 = username.newUsername;
            console.log(username1)
        })

        //da sacuva unetu poruku i prikaze listu, ali iz nekog razloga apdejt sadrzaja nece da radi :(
        newMessage.selectMsgOnClick(() => {
            addMessage(username1, newMessage.title);
            /*
            getMessage().then(data => {
                data.data.forEach(element => {
                    console.log(element);
                    this.message = new Message(element);
                    this.node.appendChild(this.message.getNode());
                });    
                scrollTo(0, this.node.scrollHeight);
            })
            */
        });

        //izlistati sve korisnike  ********CITAJ API UROSE IDIOTE !******

        select.selectAllClick(() => {
            if (select.newUsername == '') {
                console.log('niste uneli korisnika cije poruke zelite da vidite');
                // treba da dodam da kad se ne unese nista izlista sve poruke
                //i izbaci poruku, ne samo u konzoli
            } else {
                getAllMessages(select.newUsername).then(data => {

                   // document.querySelector('main').remove();
                   Main.clear();

                    console.log('ovo je main', Main.getNode());

                    data.messages.forEach(element => {
                        this.message = new Message(element);
                        Main.getNode().appendChild(this.message.getNode());
                        console.log('ovo je main sa message', Main.getNode());
                    });
                   
                });
            }
        })

    } //constructor  

    getNode(){
        return this.node;
    } 

}//class

export{
    Header
}