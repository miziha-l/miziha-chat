const Koa = require("koa");
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 3000;

// 定义一个简单的 GET 接口
router.get('/api/hello', async (ctx) => {
  ctx.body = 'Hello, Koa!';
});

// 将路由注册到应用
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(PORT, () => {
  console.log('启动了' + PORT);
});
