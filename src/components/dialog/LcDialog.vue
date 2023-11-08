<template>
    <!-- 为了避免点击dialog也触发handleClose，可以阻止事件冒泡，也可以使用self修饰符，只有点击自身时触发handleClose -->
    <div class="lc-dialog_wrapper" v-show="visible" @click.self="handleClose">
        <div class="lc-dialog" :style="{ width: width, marginTop: top }">
            <div class="lc-dialog_header">
                <slot name="title">
                    <span class="lc-dialog_title">
                        {{ title }}
                    </span>
                </slot>
                <button class="lc-dialog_headerbtn" @click="handleClose">
                    <i class="iconfont icon-delete"></i>
                </button>
            </div>
            <div class="lc-dialog_body">
                <!-- 默认插槽 -->
                <slot></slot>
            </div>
            <div class="lc-dialog_footer" v-if="$slots.footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
name: "LcDialog"
import LcButton from '../button/LcButton.vue';
import { defineProps, useSlots } from 'vue';
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
const $emits = defineEmits(['close'])
const $slots = useSlots()

/**
* @description: 弹窗关闭的回调
* @param {} 
* @return {} 
*/
const handleClose = () => {
    $emits('close', false)
}
</script>

<style lang="scss" scoped>
.lc-dialog_wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0, 0, 0, 0.5);

    .lc-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        width: 30%;

        &_header {
            padding: 20px 20px 10px;

            .lc-dialog_title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }

            .lc-dialog_headerbtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: nlc;
                outline: nlc;
                cursor: pointer;
                font-size: 16px;

                .lc-icon-close {
                    color: #909399
                }
            }
        }

        &_body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }

        &_footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;

            ::v-deep .lc-button:first-child {
                margin-right: 20px;
            }
        }
    }
}
</style>