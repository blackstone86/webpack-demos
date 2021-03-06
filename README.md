This repo is a collection of simple demos of Webpack5.

These demos are purposely written in a simple and clear style. Each of them can be compiled independently and keep all dependencies up-to-date. You will find no difficulty in following them to learn the powerful tool.

## How to use

First, install [http-server](https://www.npmjs.com/package/http-server).

```bash
$ pnpm i -g http-server
```

Then, clone the repo.

```bash
$ git clone https://github.com/blackstone86/webpack-demos.git
```

Now, play with the source files under the repo's demo\* directories.

```bash
$ cd demo01
$ pnpm i
$ pnpm serve
```

If the above command doesn't open your browser automatically, you have to visit http://127.0.0.1:8080/ by yourself. besides, you should replace `//js.cdn.com/id/` publicPath with your real cdn address in demo38, otherwise, you will see nothing in the browser.

## Index

1. [Install webpack5](https://github.com/blackstone86/webpack-demos/tree/main/demo01)
1. [Use loader](https://github.com/blackstone86/webpack-demos/tree/main/demo02)
1. [Use plugin](https://github.com/blackstone86/webpack-demos/tree/main/demo03)
1. [Use devserver](https://github.com/blackstone86/webpack-demos/tree/main/demo04)
1. [Use cli argument](https://github.com/blackstone86/webpack-demos/tree/main/demo05)
1. [Compile es6](https://github.com/blackstone86/webpack-demos/tree/main/demo06)
1. [Compile typescript](https://github.com/blackstone86/webpack-demos/tree/main/demo07)
1. [Use flow](https://github.com/blackstone86/webpack-demos/tree/main/demo08)
1. [Compile scss](https://github.com/blackstone86/webpack-demos/tree/main/demo09)
1. [Compile postcss](https://github.com/blackstone86/webpack-demos/tree/main/demo10)
1. [Compile react18 with es6](https://github.com/blackstone86/webpack-demos/tree/main/demo11)
1. [Compile react18 with typescript](https://github.com/blackstone86/webpack-demos/tree/main/demo12)
1. [Compile vue3 with es6](https://github.com/blackstone86/webpack-demos/tree/main/demo13)
1. [Compile vue3 with typescript](https://github.com/blackstone86/webpack-demos/tree/main/demo14)
1. [Compile angular13 with typescript](https://github.com/blackstone86/webpack-demos/tree/main/demo15)
1. [Compile single page application](https://github.com/blackstone86/webpack-demos/tree/main/demo16)
1. [Compile multi page application](https://github.com/blackstone86/webpack-demos/tree/main/demo17)
1. [Compile support server-side-rendering and client-side-rendering](https://github.com/blackstone86/webpack-demos/tree/main/demo18)
1. [Compile electron18 application with react18](https://github.com/blackstone86/webpack-demos/tree/main/demo19)
1. [Compile npm package with react18](https://github.com/blackstone86/webpack-demos/tree/main/demo20)
1. [Compile progressive web application](https://github.com/blackstone86/webpack-demos/tree/main/demo21)
1. [Use npm scripts](https://github.com/blackstone86/webpack-demos/tree/main/demo22)
1. [Start webpack with node.js api](https://github.com/blackstone86/webpack-demos/tree/main/demo23)
1. [Custom http server like devserver](https://github.com/blackstone86/webpack-demos/tree/main/demo24)
1. [Inline png](https://github.com/blackstone86/webpack-demos/tree/main/demo25)
1. [Inline png by condition](https://github.com/blackstone86/webpack-demos/tree/main/demo26)
1. [Inline svg](https://github.com/blackstone86/webpack-demos/tree/main/demo27)
1. [Inline compressed svg](https://github.com/blackstone86/webpack-demos/tree/main/demo28)
1. [Improve compile performance by reduce the scope](https://github.com/blackstone86/webpack-demos/tree/main/demo29)
1. [Improve compile performance by dll lib](https://github.com/blackstone86/webpack-demos/tree/main/demo30)
1. [Improve compile performance by multi threads](https://github.com/blackstone86/webpack-demos/tree/main/demo31)
1. [Inject proxy client script manually for devserver](https://github.com/blackstone86/webpack-demos/tree/main/demo32)
1. [Enable hot module replacement for devserver](https://github.com/blackstone86/webpack-demos/tree/main/demo33)
1. [Coding with environment variable](https://github.com/blackstone86/webpack-demos/tree/main/demo34)
1. [Compress css](https://github.com/blackstone86/webpack-demos/tree/main/demo35)
1. [Compress javascript and convert to es5](https://github.com/blackstone86/webpack-demos/tree/main/demo36)
1. [Compress javascript and convert to es6](https://github.com/blackstone86/webpack-demos/tree/main/demo37)
1. [publish assets to cdn](https://github.com/blackstone86/webpack-demos/tree/main/demo38)
1. [Use treeshaking by set production mode in webpack5](https://github.com/blackstone86/webpack-demos/tree/main/demo39)
1. [Split react18 librarys and page's common styles](https://github.com/blackstone86/webpack-demos/tree/main/demo40)
1. [Lazy load javascript](https://github.com/blackstone86/webpack-demos/tree/main/demo41)
1. [Lazy load page component with react-router-dom6](https://github.com/blackstone86/webpack-demos/tree/main/demo42)
1. [Compile with scope hoisting and display optimization bailout info in teminal](https://github.com/blackstone86/webpack-demos/tree/main/demo43)
1. [Generate stats.json for analysing compile performance](https://github.com/blackstone86/webpack-demos/tree/main/demo44)
1. [Summary compile performance](https://github.com/blackstone86/webpack-demos/tree/main/demo45)

## License

MIT
