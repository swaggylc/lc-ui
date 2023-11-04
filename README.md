## Button组件

#### 前置知识

**组件通讯**

**组件插槽**

**props校验**

#### 参数支持

| 参数名   | 参数描述                                        | 参数类型 | 默认值  |
| -------- | ----------------------------------------------- | -------- | ------- |
| type     | 按钮类型（primary/success/warning/danger/info） | string   | default |
| plain    | 是否是朴素按钮                                  | boolean  | false   |
| round    | 是否是圆角按钮                                  | boolean  | false   |
| circle   | 是否是圆形按钮                                  | boolean  | false   |
| disabled | 是否是禁用按钮                                  | boolean  | false   |
| icon     | 图标类名                                        | string   | 无      |

#### 事件支持

| 事件名 | 事件描述 |
| ------ | -------- |
| click  | 点击事件 |

#### 使用插槽

通俗讲，在组件内容需要灵活设置的地方，就需要使用slot插槽来自定义你的内容。

比如在button上自定义你的文本内容

```html
    <button class="lc-button" :class="[`lc-button-${type}`]">
        <!-- 在span中放入插槽，以控制插槽样式 -->
        <span>
            <slot></slot>
        </span>
    </button>
```

#### type属性

父组件传递type属性

```html
    <lc-button>一号按钮</lc-button>
    <lc-button type="primary">primary</lc-button>
    <lc-button type="success">success</lc-button>
    <lc-button type="info">info</lc-button>
    <lc-button type="warning">warning</lc-button>
    <lc-button type="danger">danger</lc-button>
```

子组件接收type属性

```js
import { defineProps } from "vue";

// 封装通用的组件，通常需要对props进行约束
const props = defineProps({
    type: {
        type: String,	//字符串类型，否则报错
        default: "primary",
    },
});
```

在子组件的类名处需要动态绑定，如`lc-button-primary`,不传type属性则默认为primary

```html
    <button class="lc-button" :class="[`lc-button-${type}`]">
```

