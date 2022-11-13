console.log('API')



const handleSubmit = async (e) => {
    const email = document.getElementById('email').value
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const city = document.getElementById('city').value
    const age = document.getElementById('age').value

    e.preventDefault();
    console.log(email, name, phone, city, age)

    const result = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, name, phone, city, age})
    })
    const data = await result.json()
    console.log(data)
}