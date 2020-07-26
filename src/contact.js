const contact = () => {
  // Change header background color
  const nav = document.querySelector('header');
  nav.style.backgroundColor = 'black';
  // Change body bg image to a color
  document.body.style.background = 'none';
  document.body.style.backgroundColor = '#c7dbcb';
  // Create container div and set its class
  const contactPageContainer = document.createElement('div');
  contactPageContainer.setAttribute('class', 'contact-page-container');

  // Element containers
  const titleContainer = document.createElement('div');
  const paragraphContainer = document.createElement('div');
  const contactContainer = document.createElement('div');
  const mapContainer = document.createElement('div');

  // Title
  titleContainer.setAttribute('class', 'contact-title-container');
  const title = document.createElement('h2');
  title.innerText = 'Central in Saratoga';
  titleContainer.appendChild(title);

  // Paragraph
  paragraphContainer.setAttribute('class', 'contact-paragraph-container');
  const paragraph = document.createElement('p');
  paragraph.innerText =
    'Welcome to Central Coffee Shop. Whether you’re vegan, gluten-free, paleo or a true carnivore, you’re sure to find something delicious to suit your palate. Some say our cold brew is the best in California.';
  paragraphContainer.appendChild(paragraph);

  // Contact
  contactContainer.setAttribute('class', 'contact-options-container');
  // email
  const emailContainer = document.createElement('div');
  const emailTitle = document.createElement('h2');
  const email = document.createElement('p');
  emailTitle.innerText = 'EMAIL';
  email.innerText = 'info@centralcoffee.com';
  emailContainer.append(emailTitle, email);
  // phone
  const phoneContainer = document.createElement('div');
  const phoneTitle = document.createElement('h2');
  const phone = document.createElement('p');
  phoneTitle.innerText = 'PHONE';
  phone.innerText = '(669)-555-2340';
  phoneContainer.append(phoneTitle, phone);
  contactContainer.append(phoneContainer);
  // hours
  const hoursContainer = document.createElement('div');
  const hoursTitle = document.createElement('h2');
  const hours = document.createElement('p');
  hoursTitle.innerText = 'HOURS';
  hours.innerText = '7am-3pm everyday';
  hoursContainer.append(hoursTitle, hours);
  // Append Contact items
  contactContainer.append(emailContainer, phoneContainer, hoursContainer);

  // Append all elements to single div
  contactPageContainer.append(
    titleContainer,
    paragraphContainer,
    contactContainer
  );

  // Return single div
  return contactPageContainer;
};

export default contact;
