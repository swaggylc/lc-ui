##  Button组件

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

接下来做能够展示密码与否的功能，展示密码无非是控制input的type属性，若是text则显示密码，若为password则不会展示密码，而我们又不能直接修改父组件中传过来的值，考虑设置一个特殊的值来控制

```js
// 控制是否展示密码
let passwordVisible = ref(false);
/**
 * @description: 切换是否显示密码
 * @return {}
 */
const passwordHandle = () => {
  passwordVisible.value = !passwordVisible.value;
};
```

在模板中：

```js
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
```

这样我们就能动态的控制type值，从而达到展示密码与否的目的

## Switch组件

#### 参数支持

| 参数名        | 参数描述           | 参数类型 | 默认值  |
| :------------ | :----------------- | :------- | :------ |
| v-model       | 双向绑定           | Boolean  | false   |
| name          | name属性           | string   | text    |
| activeColor   | 自定义的激活颜色   | string   | #1ec63b |
| inactiveColor | 自定义的不激活颜色 | string   | #dd001b |

#### 事件支持

| 事件名称 | 事件描述           |
| :------- | :----------------- |
| change   | change时触发的事件 |

完成基本的静态搭建

```html
<template>
  <div class="lc-switch">
    <span class="lc-switch_core">
      <span class="lc-switch_button"></span>
    </span>
  </div>
</template>
```

#### v-model的双向绑定

与之前的组件一样，我们通过v-model来进行双向的数据绑定

父组件中：

```html
    <div class="col">
      <lc-switch v-model="switchActive" :name="switchName"></lc-switch>
    </div>
```

子组件中：

```js
const props = defineProps({
  name: {
    type: String,
    default: "switch",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});
```

根据v-model自带的属性，我们对父组件中的数据进行间接的修改

```js
let $emits = defineEmits(["update:modelValue"]);

const changeActive = () => {
  $emits("update:modelValue", !props.modelValue);
};
```

好处就是能够省去一个我们自己手动定义的自定义事件

再动态加上样式：

```js
    :class="{ 'is-checked': modelValue }"
    
    
    .is-checked {
  .lc-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .lc-switch_button {
      transform: translateX(20px);
   	 }
 	 }
	}
```

#### 自定义颜色

父组件中传入自定义的颜色：

```html
      <lc-switch
        v-model="switchActive2"
        :name="switchName"
        activeColor="red"
        inactiveColor="#333"
      ></lc-switch>
```

子组件中接收：

```js
  activeColor: {
    type: String,
    default: "#1ec63b",
  },
  inactiveColor: {
    type: String,
    default: "#dd001b",
  },
```

定义一个方法，能够更改switch的颜色：

```js
//由于需要操作dom，所以给<span class="lc-switch_core" ref="core">打上ref标签

let core = ref(null);

/**
 * @description: 更改颜色的方法
 * @return {}
 */
const changeColor = () => {
  if (props.activeColor != "#1ec63b" || props.inactiveColor != "#dd001b") {
    // 改变switch的颜色
    let color = props.modelValue ? props.activeColor : props.inactiveColor;
    core.value.style.borderColor = color;
    core.value.style.backgroundColor = color;
  }
};
```

在onMounted中调用，以及在更改switch状态时调用：

```js
onMounted(() => {
  changeColor();
});

const changeActive = () => {
  $emits("update:modelValue", !props.modelValue);
  //   在数据发生变化后，但dom还未更新，造成第一次点击不会出现变色的bug，应该在nextTick中调用
  nextTick(() => {
    changeColor();
  });
};
```

这样我们就完成了自定义颜色的属性

#### onchange事件

```js
//接受父组件的事件，点击时通过$emits触发，即完成了onchange事件
let $emits = defineEmits(["update:modelValue", "change"]);
const changeActive = () => {
  $emits("update:modelValue", !props.modelValue);
  //   在数据发生变化后，但dom还未更新，造成第一次点击不会出现变色的bug，应该在nextTick中调用
  nextTick(() => {
    changeColor();
  });
  $emits("change", !props.modelValue);
};
```

## Radio组件

#### 前置知识

在vue中对radio的使用

```vue
<div id="example-4">
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>
</div>
new Vue({
  el: '#example-4',
  data: {
    picked: ''
  }
})
```



#### 参数支持

| 参数名称 | 参数描述        | 参数类型                | 默认值 |
| :------- | :-------------- | :---------------------- | :----- |
| v-model  | 双向绑定        | Boolean                 | false  |
| label    | 单选框和value值 | String，Number，Boolean | ' '    |
| name     | name            | String                  | ' '    |

#### 基本样式

```html
      <lc-radio label="1" v-model="gender">男</lc-radio>
      <lc-radio label="0" v-model="gender">女</lc-radio>
```

子组件中：

```html
<template>
  <label class="lc-radio" :class="{ 'is-checked': label == modelValue }">
    <span class="lc-radio_input">
      <span class="lc-radio_inner"></span>
      <input
        :value="label"
        :name="name"
        type="radio"
        class="lc-radio_original"
        v-model="model"
      />
    </span>
    <span class="lc-radio_label">
      <slot></slot>
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </label>
</template>
```

我们发现，可以通过props获取到父组件中传进来的值，并将其通过:value赋给input框，这是没问题的；但如何改变父组件中传进来的值呢？通过在input中直接v-model绑定父组件传进来的modelValue吗？显然是不行的，这样会导致在子组件中直接修改父组件传进来的值；那么我们可以使用一个计算属性，get时直接获取传进来的值，而set时通过v-model的update：modelValue的自定义事件（固定写法）去改变父组件中传进来的值。

```js
// 提供一个计算属性以绑定input，同时能够更改父组件中传进来的值
let model = computed({
  // 获取值时，直接从传进来的modelValue拿
  get: () => {
    return props.modelValue;
  },
  // 改变值时，需要改变父组件中的值
  set: (value) => {
    emits("update:modelValue", value);
  },
});
```

并且动态的控制是否选中的样式：如果传进来的值和radio中label值相等，则代表选中

```js
  <label class="lc-radio" :class="{ 'is-checked': label == modelValue }">
```

## RadioRroup组件

#### 基本结构

```vue
<template>
  <div class="one-radio-group">
    <slot></slot>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  modelValue: null,
});
</script>
```

父组件中：

```html
      <lc-radio-group v-model="gender">
        <lc-radio label="1" >男</lc-radio>
        <lc-radio label="0" >女</lc-radio>
      </lc-radio-group>
```

由于是在radio-group中获取的外部组件v-model传进来的值，而radio获取不到，所以我们应该将radio-group中获取到的modelValue传递给radio，应该用provide和inject，因为不能保证radio-group组件和radio组件是父子关系，有可能是祖孙关系，所以不直接使用props；并且应该传递整个组件（只传递emit方法和值不知能否可行）因为要使用到emit方法和要传递的modelValue值；传递后那么radio中计算属性model的的get和set就要发生相对的变化：

```js
// 提供一个计算属性以绑定input，同时能够更改父组件中传进来的值
let model = computed({
  // 获取值时，直接从传进来的modelValue拿
  get: () => {
    // 如果是被包裹，那么就从radio-group中获取值
    return isGroup.value ? radioGroup.ctx.modelValue : props.modelValue;
  },
  // 改变值时，需要改变父组件中的值
  set: (value) => {
    // 如果是被包裹，那么就改变radio-group中传进来的值
    // 应该触发radio-group组件的update:modelValue事件
    if (isGroup.value) {
      // 触发父组件的自定义事件
      radioGroup.emit("update:modelValue", value);
    } else {
      emits("update:modelValue", value);
    }
  },
});


// 当radio被radio-group包裹时，我们获取的值就应该是radio-group中传进来的值
// 提供一个计算属性，判断是否被包裹
let isGroup = computed(() => {
  return radioGroup !== undefined;
});
```

并且提供一个新的计算属性以判断radio是否被radio-group包裹。

不论是读取值（get）还是更改值时（set）应该判断是否被包裹，被包裹则从inject拿值，不被包裹则直接从父组件拿值，这样我们的radio-group组件就算封装完毕。

**ps**：不要忘记修改radio组件中选中样式的判断情况，当被radio-group包裹时，radio中的modelValue是没有值的，所以样式的判断情况应该修改为：

```html
  <label class="lc-radio" :class="{ 'is-checked': label == model }">
```

