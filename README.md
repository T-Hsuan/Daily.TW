# 20230701

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Coding style rules

## 命名
* 變數: 駝峰 ex.$fontSmall
* 屬性(選擇器): 底線 ex.#form_field

## 縮排
* Spaces: 4

## 換行
* 遇{}請換行 ex.
    function(){
        return;
    }

## Font-awesome 的格式
* 如果是在 main.js 要使用 icon，就要使用 camelCase ，但在 App.vue 則要使用 kebab-case。
* Note that you add the icons in camelCase in main.js but in kebab-case in App.vue.

## 判斷式
* 巢狀判斷式請勿用三元運算子

## 圖片比例
* oottcard 比例 279 x 369
* tripcard 比例 340 x 227
* ticket 比例 275 x 177