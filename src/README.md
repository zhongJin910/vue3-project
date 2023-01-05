# 项目布局

## layout 主体

### 布局特点

#### 1、禁止ios最外层回弹

#### 2、弹框组件不会抖动、不用手动禁止body滚顶条

```css
body {
     overflow: hidden;
}
#app {
    width:100vw;
    height:100vh;
    overflow: auto;
}
```
