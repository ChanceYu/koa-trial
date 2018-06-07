const Router = require('koa-router')

let router = new Router()

router.get('/', async (ctx) => {
    let title = 'index page oo'

    await ctx.render('index', {
        title,
    })
})

module.exports = router;