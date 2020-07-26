import navigation from './nav';

const header = () => {
  const headerElement = document.createElement('header');
  headerElement.setAttribute('role', 'banner');
  headerElement.appendChild(navigation());
  return headerElement;
};

export default header;
