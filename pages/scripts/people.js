const peopleListElement = document.querySelector('#people')

async function init() {
  try {
    const response = await fetch('/api/people', {
      body: JSON.stringify({}),
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

    const { people } = result
    people.forEach(person => {
      const personItem = document.createElement('li')
      personItem.innerText = person.name
      peopleListElement.appendChild(personItem)
    })
  } catch (error) {
    alert(error.message)
  }
}

init()
