
  const colors = ['#B5C0D','#CCD3CA','#F5E8DD','#EED3D9'];
  /*const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg']; */
  let i = 0;

  function changeBackground() {
    document.body.style.backgroundColor = colors[i];
  /*  document.body.style.backgroundImage = `url(assets/${img[i]}.jpg)`; */
    i = (i + 1) % colors.length;
  }
  setInterval(changeBackground, 2000);
  var image = document.getElementsByClassName('thumbnail');
  new simpleParallax(image, {
      delay: .6,
      transition: 'cubic-bezier(0,0,0,1)'
  });