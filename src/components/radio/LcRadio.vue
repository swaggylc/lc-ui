<template>
    <label class="lc-radio is-checke">
        <span class="lc-radio_input">
            <span class="lc-radio_inner"></span>
            <input type="radio" class="lc-radio_original">
        </span>
        <span class="lc-radio_label">我是label</span>
    </label>
</template>

<script setup>
name: 'LcRadio'
</script>

<style lang="scss" scoped>
.lc-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;

    .lc-radio_input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;

        .lc-radio_inner {
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;

            &:after {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0);
                transition: transform .15s ease-in;
            }
        }

        .lc-radio_original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0px;
            right: 0;
            bottom: 0;
            margin: 0;
        }
    }

    .lc-radio_label {
        font-size: 14px;
        padding-left: 10px;
        ;
    }
}

// 选中的样式
.lc-radio.is-checked {
    .lc-radio_input {
        .lc-radio_inner {
            border-color: #409eff;
            background-color: #409eff;

            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }

    .lc-radio_label {
        color: #409eff;
    }
}</style>