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

**sync修饰符（vue3中使用v-model）**

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

#### 控制dialog宽度与距离顶部的距离

父组件给子组件传递width与top的值

```html
    <lc-dialog top='200px' width="600px">
```

子组件接收并动态添加行内样式

```vue
<div class="lc-dialog" :style="{ width: width, marginTop: top }">

const props = defineProps({
    title: {
        type: String,
        default: '提示'
    },
    width: {
        type: String,
        default: '50%'
    },
    top: {
        type: String,
        default: '15vh'
    }
})
```

#### 给底部添加footer具名插槽，给body添加默认插槽

使用具名插槽可以控制dialog底部内容

```vue
            <div class="lc-dialog_body">
                <!-- 默认插槽 -->
                <slot></slot>
            </div>
            <div class="lc-dialog_footer" v-if="$slots.footer">
                <slot name="footer"></slot>
            </div>
```

在父组件中使用

```vue
<lc-dialog top='200px' width="600px">
      <template v-slot:title>
        <h3 style="color:red;">我是插槽</h3>
      </template>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <lc-button>取消</lc-button>
        <lc-button type="primary">确定</lc-button>
      </template>
    </lc-dialog>
```

#### 控制dialog的显示与隐藏

父组件中传递visible属性

```html
    <lc-dialog top='200px' width="600px" :visible="visible">
```

子组件中接收

```js
    visible: {
        type: Boolean,
        default: false
    }
```

visible控制最外层div的显示与隐藏，使用v-show（经常切换是否显示状态）

```html
    <div class="lc-dialog_wrapper" v-show="visible" @click.self="handleClose">
```

关闭dialog时，需要改变父组件中visible的值，涉及到子组件给父组件传值，首先想到自定义事件

子组件触发父组件的close事件

```js
const $emits = defineEmits(['close'])
/**
* @description: 弹窗关闭的回调
* @param {} 
* @return {} 
*/
const handleClose = () => {
    $emits('close', false)
}
```

父组件注册close事件

```html
<lc-dialog top='200px' width="600px" :visible="visible" @close="close">
```

```js
const close = (value) => {
  visible.value = value
}
```

但这种方式过于繁琐，考虑使用更便捷的sync语法糖（vue2）

在vue3中sync语法糖被弃用了，所以我们可以通过v-model来达到同样的效果

在父组件中：

```html
    <lc-dialog top='200px' width="600px" v-model:visible="visible">
```

![image-20231110211640039](C:\Users\juhe\AppData\Roaming\Typora\typora-user-images\image-20231110211640039.png)

在子组件中：

接收传递过来的值还是一样，通过props接收

```js
const props = defineProps({
    title: {
        type: String,
        default: '提示'
    },
    width: {
        type: String,
        default: '50%'
    },
    top: {
        type: String,
        default: '15vh'
    },
    visible: {
        type: Boolean,
        default: false
    }
})
```

触发事件：

事件的固定写法："update: ‘属性名’"

```js
/**
* @description: 弹窗关闭的回调
* @param {} 
* @return {} 
*/
const handleClose = () => {
    $emits('update:visible', false)
}
```

![image-20231110212113911](C:\Users\juhe\AppData\Roaming\Typora\typora-user-images\image-20231110212113911.png)

在vue2中是同样的用法，只不过是使用sync修饰符，就不再赘述

#### dialog的动画实现

详细信息参考官方文档

定义一个fade动画：

```less
.dialog-fade-enter-active {
    animation: fade .3s;
}

.dialog-fade-leave-active {
    // 离开时反向调用
    animation: fade .3s reverse;
}

@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
```

然后使用transition包裹整个dialog组件：

```html
    <transition name="dialog-fade">
```

#### 深度选择器

scoped会给当前组件的模板中所有的元素都添加上一个随机的属性：v-data-随机字母+数字

scoped会给当前所有的样式添加同样的属性选择器

这样当前组件的样式就不会被其他组件所影响，如使用其他组件

写法：scss: ::v-deep	less： /deep/	css:>>>

## Input组件

#### 参数支持

| 参数名称      | 参数描述                  | 参数类型 | 默认值 |
| ------------- | ------------------------- | -------- | ------ |
| placeholder   | 占位符                    | string   | 无     |
| type          | 文本框类型(text/password) | string   | text   |
| disabled      | 禁用                      | boolean  | false  |
| clearable     | 是否显示清空按钮          | boolean  | false  |
| show-password | 是否显示密码显示按钮      | boolean  | false  |
| name          | name属性                  | string   | 无     |

#### 事件支持

| 事件名称 | 事件描述     |
| -------- | ------------ |
| blur     | 失去焦点事件 |
| change   | 内容改变事件 |
| focus    | 获取焦点事件 |

基本的属性与动态绑定样式与上面的组件一致，就不再赘述

#### v-model的属性支持

当我们给一个input框进行双向数据绑定时，我们需要使用v-model

而v-model实质是做了两件事，绑定input的value值，通过input的change事件改变绑定的value值

```html
      <input :value="username" @input="username=$event.target.value"/>
```

父组件中：

```html
    <div class="col">
      <!-- 父组件中通过v-model绑定，子组件中通过value接收 -->
      <lc-input placeholder="请输入用户名" v-model="userName"></lc-input>
    </div>
```

子组件中：

```vue
      <input
      class="lc-input_inner"
      :class="{ 'is-disabled': disabled }"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :clearable="clearable"
      :name="name"
      :value="modelValue"
    />
  	modelValue:{
    	type:String,
    	default:''
  	}
```

但由于这样只是实现了单向数据传递，我们还要在子组件中修改modelValue的值并传回给父组件：

与控制dialog组件的显示与隐藏一样，但不用指定特定的变量

父组件中：

```html
    <div class="col">
      <!-- 父组件中通过v-model绑定，子组件中通过value接收 -->
      <lc-input placeholder="请输入用户名" v-model="userName"></lc-input>
    </div>
```

子组件中：

```vue
      <input
      class="lc-input_inner"
      :class="{ 'is-disabled': disabled }"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :clearable="clearable"
      :name="name"
      :value="modelValue"
      @input="handleInput"
    />
  	modelValue:{
    	type:String,
    	default:''
  	}
  	const $emits=defineEmits(['update:modelValue'])

	const handleInput=(e)=>{
  		console.log('111');
  		console.log("e---",e);
  	$emits('update:modelValue',e.target.value)
	}
```

这样我们就实现了input数据的双向绑定

#### clearable属性与show-password

完成基本样式结构

```html
  <div class="lc-input" :class="{ 'iconfont icon-eye': inputSuffix }">
    <input
      class="lc-input_inner"
      :class="{ 'is-disabled': disabled }"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :clearable="clearable"
      :name="name"
      :value="modelValue"
      @input="handleInput"
    />
    <span class="lc-input_suffix">
      <i class="iconfont icon-eye" v-if="showPassword"></i>
      <i class="iconfont icon-delete" v-if="clearable"></i>
    </span>
  </div>
```

子组件中接收属性：

```js
  clearable: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
```

点击icon图标时应该清除modelValue的值，将其置为空串就好

模板内：

```html
    <span class="lc-input_suffix" v-if="inputSuffix">
      <i class="iconfont icon-eye" v-if="showPassword"></i>
      <i
        class="iconfont icon-delete"
        v-if="clearable && modelValue"
        @click="clear"
      ></i>
    </span>
```

script内：

```js
/**
 * @description: 清空输入框的回调
 * @param {}
 * @return {}
 */
const clear = () => {
  $emits("update:modelValue", "");
};
```

这样我们就完成了清空输入框的功能

