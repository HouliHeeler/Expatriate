const update = document.querySelector('#update-button')
const deletebutton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

update.addEventListener('click', _ => {
    fetch('/countries', {
        method: 'put',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            country: 'Der Suisse'
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(response => {
        window.location.reload(true)
    })
})

deletebutton.addEventListener('click', _ => {
    fetch('/countries', {
        method: 'delete',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            country: 'Der Suisse'
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(response => {
        if (response === 'The country had been previously vanquished') {
            messageDiv.textContent = 'It is as though Der Suisse were never here'
        } else {
            window.location.reload(true)
        }
    })
})