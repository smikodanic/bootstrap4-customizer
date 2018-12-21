# BOOTSTRAP4-CUSTOMIZER
Customize bootstrap 4 scss files by using webpack.


## INSTALLATION
```npm install```

## DEVELOPMENT
```bash
// first terminal (build scss)
$ npm run build
```



## WEBPACK

### BUILD SCSS
The idea is to take bootstrap elements from /node_modules/bootstrap/scss/... and to override its values.

Don't forget ```npm install```.

Webpack will reload changes automatically by webpack-dev-server's live reload.
To enable live reload:
- in webpack.config.js set **watchContentBase: true**
- in *index.html* place ```<script src="/dist/bundle.bootstrap.js"></script> ```




## LICENCE
MIT



