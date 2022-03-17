const { formBlock } = document.forms;

formBlock.addEventListener('submit', async (e) => {
  e.preventDefault();
  const regData = Object.fromEntries(new FormData(formBlock));
  const response = await fetch('/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(regData),
  })
  console.log(response);
  if (response.status === 200) {
    window.location = '/'
  } else {
    const data = await response.json()
    alert(data.message);
  }
})
