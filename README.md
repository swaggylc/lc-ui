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

#### plain属性

父组件传递plain属性

```html
  <div class="row">
    <lc-button plain>一号按钮</lc-button>
    <lc-button plain type="primary">primary</lc-button>
    <lc-button plain type="success">success</lc-button>
    <lc-button plain type="info">info</lc-button>
    <lc-button plain type="warning">warning</lc-button>
    <lc-button plain type="danger">danger</lc-button>
  </div>
```

子组件接收plain属性

```js
// 封装通用的组件，通常需要对props进行约束
const props = defineProps({
    type: {
        type: String,	//字符串类型，否则报错
        default: "primary",
    },
    plain: {
        type: Boolean,
        default: false
    }
});
```

在子组件的类名处动态绑定

```html
    <button class="lc-button" :class="[`lc-button-${type}`, { 'is-plain': plain }]">
		注意：双引号内使用单引号
```

#### around属性

同上

#### circle属性

同上

#### icon属性

在阿里巴巴图标库中引入.css文件，在项目中main.js引入即可全局使用

![image-20231105123305238](C:\Users\juhe\AppData\Roaming\Typora\typora-user-images\image-20231105123305238.png)

```js
// 全局引入图标文件
import './assets/font/font.css'
```

父组件中传入icon类名

```html
  <div class="row">
    <lc-button icon="icon-delete" circle></lc-button>
    <lc-button icon="icon-delete" circle type="primary"></lc-button>
    <lc-button icon="icon-delete" circle type="success"></lc-button>
    <lc-button icon="icon-delete" circle type="info"></lc-button>
    <lc-button icon="icon-delete" circle type="warning"></lc-button>
    <lc-button icon="icon-delete" circle type="danger"></lc-button>
  </div>
```

在子组件中接收

```html
    <button class="lc-button"
        :class="[`lc-button-${type}`, { 'is-plain': plain }, { 'is-round': round }, { 'is-circle': circle }]">
        <!-- 在span中放入插槽，以控制插槽样式 -->
        <i v-if="icon" class="iconfont" :class="icon"></i>
        <span v-if="$slot.default">
            <slot></slot>
        </span>
    </button>
```

```js
    icon: {
        type: String,
        default: ''
    }
```

注意：i标签的隐藏与否由其是否传入icon属性决定，span标签的显示与否由插槽内是否有内容决定

#### click点击事件

本质是子组件触发父组件的自定义事件

父组件中：

```vue
    <lc-button @btnClick="fn" icon="icon-delete" circle></lc-button>
        const fn = () => {
          console.log('123');
        }

```

子组件中：

```vue
    <button @click="handleClick" class="lc-button" :class="[
        `lc-button-${type}`,
        { 'is-plain': plain },
        { 'is-round': round },
        { 'is-circle': circle },
    ]">
        <!-- 在span中放入插槽，以控制插槽样式 -->
        <i v-if="icon" class="iconfont" :class="icon"></i>
        <span v-if="$slot.default">
            <slot></slot>
        </span>
    </button>
        const $emits = defineEmits(['btnClick']);

        const handleClick = (e) => {
            $emits("btnClick", e);
        };
```

注意：自定义事件最好不要与vue自带的事件重名，否则可能产生不能预估的影响

#### disabled属性

同上

## Dialog组件

#### 前置知识

**vue的过渡与动画**

**sync修饰符**

**具名插槽与v-slot指令**

#### 参数支持

| 参数名  | 参数描述                         | 参数类型 | 默认值 |
| ------- | -------------------------------- | -------- | ------ |
| title   | 对话框标题                       | string   | 提示   |
| width   | 宽度                             | string   | 50%    |
| top     | 与顶部的距离                     | string   | 15vh   |
| visible | 是否显示dialog（支持sync修饰符） | boolean  | false  |

#### 事件支持

| 事件名 | 事件描述       |
| :----- | :------------- |
| opened | 模态框显示事件 |
| closed | 模态框关闭事件 |

#### 插槽说明

| 插槽名称 | 插槽描述           |
| :------- | :----------------- |
| default  | dialog的内容       |
| title    | dialog的标题       |
| footer   | dialog的底部操作区 |

#### 自定义title内容

将span放在slot内便于控制样式

```html
    <div class="lc-dialog_wrapper">
        <div class="lc-dialog">
            <div class="lc-dialog_header">
                <slot name="title">
                    <span class="lc-dialog_title">
                        {{ title }}
                    </span>
                </slot>
                <button class="lc-dialog_headerbtn">
                    <i class="iconfont icon-delete"></i>
                </button>
            </div>
            <div class="lc-dialog_body">
                <span>这是一段信息</span>
            </div>
            <div class="lc-dialog_footer">
                <lc-button>取消</lc-button>
                <lc-button type="primary">确定</lc-button>
            </div>
        </div>
    </div>
```

可以通过父子组件传参给子组件dialog指定title的内容，也可以通过具名插槽插入自定义的模板

```html
  <div class="row">
    <lc-dialog title="你好"></lc-dialog>
    <lc-dialog>
      <template v-slot:title>
        <h3>我是插槽</h3>
      </template>
    </lc-dialog>
  </div>
```

#### 
