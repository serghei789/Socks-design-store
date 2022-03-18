const colorSelector = document.querySelector('#colorSelector');
const pictureSelector = document.querySelector('#pictureSelector');
const ornamentSelector = document.querySelector('#ornamentSelector');
const socksDiv = document.querySelector('#socks');
const btnCart = document.querySelector('#btnCart');
const btnFav = document.querySelector('#btnFav');
const pictureOnSock1 = document.querySelector('#pictureOnSock1');
const pictureOnSock2 = document.querySelector('#pictureOnSock2');

colorSelector.addEventListener('click', async (e) => {
  const id = e.target.value;
  if (id === 'цвет') return;
  const resp = await fetch('/generator', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  const code = await resp.json();
  socksDiv.style.backgroundColor = code.code;
});

pictureSelector.addEventListener('click', async (e) => {
  const id = e.target.value;
  console.log(id);
  if (id === 'картинка') return;
  const resp = await fetch('/generator/picture', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  const src = await resp.json();
  pictureOnSock1.style.backgroundImage = `url('${src.src}')`;
  pictureOnSock2.style.backgroundImage = `url('${src.src}')`;
});

btnCart.addEventListener('click', (e) => {
  console.log(4);
  window.location.replace(`http://localhost:4000/cart/add?colorId=${colorSelector.value}&pictureId=${pictureSelector.value}&ornamentId=${ornamentSelector.value}&userId=${req.session.userId}`);
});

btnFav.addEventListener('click', (e) => {
  window.location.replace(`http://localhost:4000/favourites/add?colorId=${colorSelector.value}&pictureId=${pictureSelector.value}&ornamentId=${ornamentSelector.value}&userId=${req.session.userId}`);
});
