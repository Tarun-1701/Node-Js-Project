console.log('Admin API')


const handleView = async (e) => {

    e.preventDefault();


    const result = await fetch('http://localhost:4000/api/view', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    console.log(result)
    const data = await result.json()
    console.log(data.data)

    data.data.map(i => {
        const div = document.createElement('div')
        const h1 = document.createElement('h4')
        const p = document.createElement('p')
        const p1 = document.createElement('p')
        div.classList.add('card')
        p.classList.add('city')
        p1.classList.add('email')
        h1.innerHTML = i.name
        p.innerHTML = i.city
        p1.innerHTML = i.email
        div.append(h1)
        div.append(p1)
        div.append(p)
        document.body.append(div)
    })
}