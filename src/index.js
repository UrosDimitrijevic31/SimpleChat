import '../assets/css/style.css';

import { Dashboard } from './layouts/dashboard';
import { getMessage } from './utilities/messages-service';


getMessage().then(data => {
    console.log(data);
})


const app = document.querySelector('#app');
let dashboard = new Dashboard();
app.appendChild(dashboard.getNode());

