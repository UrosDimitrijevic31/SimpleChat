import '../assets/css/style.css';
import { Dashboard } from './layouts/dashboard';

const app = document.querySelector('#app');
let dashboard = new Dashboard();
app.appendChild(dashboard.getNode());

