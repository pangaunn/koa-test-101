const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')

const server = new Koa()
const router = new Router()

router.post('/product/stock', async (ctx, next) => {
  ctx.body = 'AAA'
})

router.get('/test', async (ctx, next) => {
  ctx.body = '33445566'
})

router.get('/eeee', async (ctx, next) => {
  ctx.body = '1111'
})

server
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods())

module.exports = server
