const Router = require('koa-router')

const home = require('./home')
const page = require('./page')

// 装载所有子路由
let router = new Router()

router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

module.exports = router;