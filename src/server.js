const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })

const server = new Koa()
const router = new Router()

const productModel = require('./model/product')
router.get('/product', async (ctx, next) => {
  const products = await productModel.find()
  ctx.body = products
})

router.post('/product/stock', async (ctx, next) => {
  // const products = await productModel.find()
  // ctx.body = products
})

router.get('/captcha', async (ctx, next) => {
  ctx.body = '33445566'
})

router.get('/random', async (ctx, next) => {
  ctx.body = '1111'
})

server
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods())

module.exports = server
