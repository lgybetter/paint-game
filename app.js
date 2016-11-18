import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import mongoose from 'mongoose'
import config from './config'
import router from './routes/index'
import serve from 'koa-static'

//链接数据库
mongoose.connect(`mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.dbname}`)
//把mongoose的写法转换成Promise调用
mongoose.Promise = require('bluebird')
global.Promise = require('bluebird')

const app = new Koa()
app.use(serve(__dirname + '/public'))

//使得ctx能够解析body的内容
app.use(bodyParser())

//路由系统
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
console.log('app started at port 3000...')