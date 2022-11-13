const app = require('express')
const router = app.Router()

const _user = require('../models/users')

// login controller
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await _user.findOne({ email }).exec()
    if (!user) return res.status(401).json({ message: 'User not exits' })
    else {
        if (password == user.password) {
            return res.status(200).json({ message: 'Loged in' })
        } else return res.json({ message: 'Wrong Password' })
    }
})

// register controller
router.post('/register', async (req, res) => {
    const { name, phone, city, age, email } = req.body
    console.log(req.body)
    if (!name || !phone || !city || !age) {
        return res.status(401).json({ message: 'Please enter the value' })
    } else {
        try {
            const newUser = new _user({ name, phone, age, city, email })
            newUser.save().then(() => {
                return res.status(201).json({ message: 'Account Created !', data: newUser })
            }).catch(err => {
                if (err.code === 11000) {
                    return res.json({ message: 'User already registerd' })
                }
                return res.json({ message: err })
            })

        } catch (error) {
            return res.status(500)
        }
    }
})

router.get('/view', (req, res) => {
    const user = _user.find().then(data => {
        console.log(data)
        return res.json({ data })
    })
})


module.exports = router