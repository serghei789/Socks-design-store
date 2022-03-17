const { formBloock } = document.forms;
formBloock.addEventListener('submit', async (e) => {
  e.preventDefault();
  const autData = Object.fromEntries(new FormData(formBloock));
  const response = await fetch('/authorization', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(autData),
  })
  console.log(response);
  const data = await response.json();
  if (response.status === 200) {
    window.location = '/'
  } else {
    const data = await response.json()
    alert(data.message);
  }
})
