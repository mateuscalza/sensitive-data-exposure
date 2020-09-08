const form = document.querySelector('#form')

form.addEventListener('submit', async event => {
  try {
    event.preventDefault()
    const response = await fetch('/api/signup', {
      body: JSON.stringify({
        name: form.querySelector('[name=name]').value,
        cpf: form.querySelector('[name=cpf]').value,
        email: form.querySelector('[name=email]').value,
        password: form.querySelector('[name=password]').value,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const result = await response.json()
    if (result.error) {
      throw new Error(result.error)
    }

    location.href = '/people.html'
  } catch (error) {
    alert(error.message)
  }
})
