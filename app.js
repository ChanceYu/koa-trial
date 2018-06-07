const Koa = require('koa')
const path = require('path')
const views = require('koa-views')
const static = require('koa-static')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session-minimal')
const MysqlSession = require('koa-mysql-session')

const logger = require('./server/middleware/logger')
const routers = require('./server/router/router')

const app = new Koa()

const staticPath = './client/static'

app.use(bodyParser())

app.use(static(
    path.join(__dirname, staticPath)
))

// 加载模板引擎
app.use(views(path.join(__dirname, './server/view'), {
    extension: 'ejs'
}))

app.use(logger())

// 加载路由中间件
app.use(routers.routes()).use(routers.allowedMethods())

app.use(async (ctx) => {
    ctx.cookies.set(
        'uid',
        'koa-trial', {
            domain: 'localhost',
            path: '/',
            maxAge: 10 * 60 * 1000,
            expires: new Date('2019-09-09'),
            httpOnly: false,
            overwrite: false
        }
    )

    let url = ctx.request.url

    url = 'router: ' + url

    ctx.body = url
})

app.listen(3000, () => {
    console.log('koa-trial is starting at port 3000')
})