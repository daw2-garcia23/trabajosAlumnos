import { footer } from "./componentes/footer";
import { header } from "./componentes/header";
import { home } from "./vistas/home";
import './scss/style.scss'
import * as bootstrap from 'bootstrap'

document.querySelector('main').innerHTML = home.template;
document.querySelector('header').innerHTML = header.template;
document.querySelector('footer').innerHTML = footer.template;