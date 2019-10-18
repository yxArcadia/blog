# Axios使用

## 1、使用 axios 发送请求

安装axios

```shell
npm install axios -s
```

引用 Axios

main.js中加入

```shell
import axios from 'axios'
Vue.prototype.axios = axios;
```

发送请求

```html
 <button v-on:click="dianji()">点击</button>
```

```js
 methods: {
      dianji() {
        this.axios({
          method: 'get',
          url: 'http://localhost:8080/datatotuiguang/getTimeintervalAnalysis'
        }).then(function (repos) {
          console.log(repos);
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
```

由于跨域会发生请求成功但是浏览器解析错误

## 2、解决跨域问题

修改mian.js增加语句

```js
axios.defaults.baseURL = '/api';
```

修改config/index.js

```js
proxyTable: {
      '/api': {
        target:'http://localhost:8080', // 你请求的第三方接口
        changeOrigin:true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite:{  // 路径重写，
          '^/api': ''  // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api即可。
        }
      }
    }
```

修改请求方法js

```js
methods: {
      dianji() {
        this.axios({
          method: 'get',
          url: '/datatotuiguang/getTimeintervalAnalysis'//此处只需要uri
        }).then(function (repos) {
          console.log(repos);
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
```

原理：

因为我们给url加上了前缀/api，我们访问/datatotuiguang/getTimeintervalAnalysis就当于访问了：localhost:8080/api//datatotuiguang/getTimeintervalAnalysis（其中localhost:8080是默认的IP和端口）。

在index.js中的proxyTable中拦截了/api,并把/api及其前面的所有替换成了target中的内容，因此实际访问Url是http://localhost:8080/datatotuiguang/getTimeintervalAnalysis