const form = document.querySelector('#form')

form.addEventListener('submit', async event => {
  try {
    event.preventDefault()
    await fetch('/api/signup', {
      body: JSON.stringify({
        email: form.querySelector('[name=email]').value,
        password: form.querySelector('[name=password]').value,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    location.href = '/people.html'
  } catch (error) {
    alert(error.message)
  }
})
