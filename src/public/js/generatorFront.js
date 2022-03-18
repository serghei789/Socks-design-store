const colorSelector = document.querySelector('#colorSelector');
const socksDiv = document.querySelector('#socks');
const colors = [{
  id: 1, name: 'Skyblue', code: 'rgb(200, 226, 234)', createdAt: '2022-03-17T17:10:42.646Z', updatedAt: '2022-03-17T17:10:42.646Z',
}, {
  id: 2, name: 'Lightpink', code: 'rgb(242, 209 ,209)', createdAt: '2022-03-17T17:10:42.646Z', updatedAt: '2022-03-17T17:10:42.646Z',
}, {
  id: 3, name: 'Pink', code: 'rgb(198, 20, 78)', createdAt: '2022-03-17T17:10:42.646Z', updatedAt: '2022-03-17T17:10:42.646Z',
}, {
  id: 4, name: 'Navy blue', code: 'rgb(21, 53, 92)', createdAt: '2022-03-17T17:10:42.646Z', updatedAt: '2022-03-17T17:10:42.646Z',
}, {
  id: 5, name: 'Yellow', code: 'rgb(244, 191, 77)', createdAt: '2022-03-17T17:10:42.646Z', updatedAt: '2022-03-17T17:10:42.646Z',
}, {
  id: 6, name: 'Purple', code: 'rgb(106, 14, 111)', createdAt: '2022-03-17T17:10:42.646Z', updatedAt: '2022-03-17T17:10:42.646Z',
}, {
  id: 7, name: 'Red', code: 'rgb(192, 21, 24)', createdAt: '2022-03-17T17:10:42.646Z', updatedAt: '2022-03-17T17:10:42.646Z',
}, {
  id: 8, name: 'Green', code: 'rgb(33, 81, 93)', createdAt: '2022-03-17T17:10:42.646Z', updatedAt: '2022-03-17T17:10:42.646Z',
}, {
  id: 9, name: 'Brown', code: 'rgb(85, 56, 37)', createdAt: '2022-03-17T17:10:42.646Z', updatedAt: '2022-03-17T17:10:42.646Z',
}, {
  id: 10, name: 'Blue', code: 'rgb(106, 135, 167)', createdAt: '2022-03-17T17:10:42.646Z', updatedAt: '2022-03-17T17:10:42.646Z',
}];
console.log(colorSelector);
colorSelector.addEventListener('click', async (e) => {
  console.log(colorSelector.value);
  console.log(socksDiv);
  console.log(socksDiv.style.backgroundColor);
  for (const color of colors) {
    if (color.id === Number(colorSelector.value)) {
      socksDiv.style.backgroundColor = color.code;
    }
  }
  // socksDiv.style.backgroundColor = 'rgb(200, 226, 234)';
});
