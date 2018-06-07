const Router = require('koa-router')

let router = new Router()

router.get('/404', async (ctx) => {
    let title = '404 page'

    await ctx.render('404', {
        title,
    })
}).get('/helloworld', async (ctx) => {
    ctx.body = 'helloworld page!'
})

module.exports = router;