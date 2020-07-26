const menu = () => {
  // Change header background color
  const nav = document.querySelector('header');
  nav.style.backgroundColor = '#171717';

  // Change body bg image to a color
  document.body.style.background = 'none';
  document.body.style.backgroundColor = '#fdfaf2';

  // Create container div and set its class
  const menuPageContainer = document.createElement('div');
  menuPageContainer.setAttribute('class', 'menu-section-container');
  // Element containers
  const titleContainer = document.createElement('div');
  const menuItemsContainer = document.createElement('div');

  // Title
  titleContainer.setAttribute('class', 'menu-title-container');
  const title = document.createElement('h1');
  title.innerText = 'menu';
  titleContainer.appendChild(title);

  // Menu Items Container
  menuItemsContainer.setAttribute('class', 'menu-items-container');

  // Menu Object
  const menuArray = [
    {
      title: 'CHICKEN SALAD WRAP',
      price: '$8.00',
      description:
        'Shredded chicken, thyme, chervil, parsley, celery, red onion, mayonnaise, mustard powder, lemon juice/zest, white vinegar, salt & pepper, lettuce, spinach wrap',
    },
    {
      title: 'JERSEY TORPEDO SANDWICH',
      price: '$10.00',
      description:
        'Salami, ham, capicola, provolone, pepperoncini, onion, tomato, lettuce, mustard, mayonnaise & red wine vinegar.',
    },
    {
      title: 'ROASTED TURKEY & SALAMI SANDWICH',
      price: '$12.00',
      description:
        'Roasted turkey, salami, provolone, spinach, pepperoncini, mayo, mustard',
    },
    {
      title: 'TUNA SALAD SANDWICH',
      price: '$10.00',
      description:
        'Tuna, pickled jalapeños & carrots, celery, onion, parsley, mayonnaise, coriander, sumac, salt & pepper.',
    },
  ];
  // Menu Item Function
  const renderMenuItems = () => {
    menuArray.forEach((object) => {
      const menuItem = document.createElement('div');
      menuItem.setAttribute('class', 'menu-item');
      //
      const menuItemTitle = document.createElement('div');
      menuItemTitle.setAttribute('class', 'menu-item-title');
      menuItemTitle.innerText = object.title;
      const menuItemPrice = document.createElement('div');
      menuItemPrice.setAttribute('class', 'menu-item-price');
      menuItemPrice.innerText = object.price;
      const menuItemDescription = document.createElement('div');
      menuItemDescription.setAttribute('class', 'menu-item-description');
      menuItemDescription.innerText = object.description;
      //
      menuItem.append(menuItemTitle, menuItemPrice, menuItemDescription);
      //
      menuItemsContainer.appendChild(menuItem);
    });
  };
  renderMenuItems();

  menuPageContainer.append(titleContainer, menuItemsContainer);

  return menuPageContainer;
};

export default menu;
