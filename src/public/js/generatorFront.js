const colorSelector = document.querySelector('#colorSelector');
const pictureSelector = document.querySelector('#pictureSelector');
const socksDiv = document.querySelector('#socks');
const pictureOnSock1 = document.querySelector('#pictureOnSock1');
const pictureOnSock2 = document.querySelector('#pictureOnSock2');

colorSelector.addEventListener('click', async (e) => {
  const id = e.target.value;
  if (id === 'цвет') return;
  // console.log(e.target.value);
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
