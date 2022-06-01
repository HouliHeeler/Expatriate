const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('/countries', {
        method: 'put',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            country: 'Der Suisse'
        })
    })
})