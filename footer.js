const footer = () => {
  const footerContainer = document.createElement('footer');
  const footerParagraph = document.createElement('p');
  footerParagraph.innerText = '3210 Saratoga Blvd • Saratoga, CA 90001';
  footerContainer.appendChild(footerParagraph);
  return footerContainer;
};
export default footer;
