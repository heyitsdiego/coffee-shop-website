const navigation = () => {
  //
  const nav = document.createElement('nav');
  const home = document.createElement('div');
  const menu = document.createElement('div');
  const contact = document.createElement('div');
  //
  const aHome = document.createElement('a');
  const aMenu = document.createElement('a');
  const aContact = document.createElement('a');

  aHome.innerText = 'HOME';
  aMenu.innerText = 'MENU';
  aContact.innerText = 'CONTACT';
  //
  aHome.href = '#home-section';
  aMenu.href = '#menu-section';
  aContact.href = '#contact-section';

  home.appendChild(aHome);
  menu.appendChild(aMenu);
  contact.appendChild(aContact);
  nav.append(home, menu, contact);
  return nav;
};

export default navigation;
