var credentials = [
    { email: 'bob@com.au', password: 'alice123' },
    { email: 'alice@com.au', password: 'bob123' },
    { email: 'fred@com.au', password: 'helloworld' }
]

module.exports = {
    login: (app) => {
        app.post('/api/login', (req,res) => {
            let email = req.body.email; let password = req.body.password;
            validate = credentials.find(login => login.email == email && login.password == password);
            res.send(validate ? {"valid": true} : {"valid": false})
        })
    }
}