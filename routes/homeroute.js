module.exports = {
    route: (app, path)=> {
        app.get('/', (req,res) => {
            let filepath = path.resolve('./www/index.html')
            res.sendFile(filepath);
        })
    }

}