module.exports = {
    route: (app, path)=> {
        app.get('/account', (req,res) => {
            let filepath = path.resolve('./www/account.html')
            res.sendFile(filepath);
        })
    }

}