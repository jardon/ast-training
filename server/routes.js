const db_broker = require('./broker')

module.exports._ROUTES = app => {

    // DB Routes
    /* SELECT ALL (GET)*/
    app.get('/api/:table', (req, res) =>
        db_broker.SelectAll(req.params.table)
            .then(results => res.send(results))
            .catch(err => res.send(err))
    )

    /* SELECT BY PROP (GET) */
    app.get('/api/:table/:prop/:val', (req, res) =>
        db_broker.FindBy(req.params.table, req.params.prop, req.params.val)
            .then(results => res.send(results))
            .catch(err => res.send(err))
    )

    /* INSERT (POST) */
    app.post('/api/:table', (req, res) =>
        db_broker.Insert(req.params.table, req.body)
            .then(results => res.send(results))
            .catch(err => res.send(err))
    ) 
    
    /* UPDATE (PUT) */
    app.put('/api/:table/:prop/:val', (req, res) =>
        db_broker.Update(req.params.table, req.params.prop, req.params.val, req.body)
            .then(results => res.send(results))
            .catch(err => res.send(err))
    )

    /* DELETE (DELETE) */
    app.delete('/api/:table/:prop/:val', (req, res) =>
        db_broker.Delete(req.params.table, req.params.prop, req.params.val)
            .then(results => res.send(results))
            .catch(err =>res.send(err))
    )
    
}