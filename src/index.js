import 'normalize.css';
import './main.css';
import header from './header';
import home from './home';
import contact from './contact';
import menu from './menu';
import footer from './footer';

const content = document.getElementById('content');

document.body.prepend(header());
document.body.appendChild(footer());
content.appendChild(home());

function clearPage() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

const renderPage = (e) => {
  clearPage();
  const { target } = e;
  switch (target.innerText) {
    case 'HOME':
      content.appendChild(home());
      break;
    case 'MENU':
      content.appendChild(menu());
      break;
    case 'CONTACT':
      content.appendChild(contact());
      break;
    default:
  }
};

const a = document.querySelectorAll('a');
a.forEach((element) => element.addEventListener('click', renderPage));
