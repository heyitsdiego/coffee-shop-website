const home = () => {
  document.body.style.background = "url('/src/assets/cafe.jpg') no-repeat center center fixed";
  document.body.style.backgroundSize = 'cover';
  const section = document.createElement('section');
  section.setAttribute('class', 'title');
  const title = document.createElement('h1');
  const subTitle = document.createElement('h2');
  title.innerText = 'central';
  subTitle.innerText = 'neighborhood coffee shop';
  section.append(title, subTitle);
  return section;
};

export default home;
