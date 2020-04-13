<template>
    <button
        class="j-button"
        :class="{ [`icon-${iconPosition}`]: true }"
        @click="$emit('click')"
    >
        <svg class="svgicon" v-if="svgicon && !loading">
            <use :xlink:href="`#i-${svgicon}`"></use>
        </svg>
        <svg class="svgicon loading-animation" v-if="loading">
            <use xlink:href="#i-jiazai"></use>
        </svg>
        <div class="btn-text"><slot>默认按钮</slot></div>
    </button>
</template>
<script>
export default {
    name: "Button",
    props: {
        svgicon: {},
        loading: {
            type: Boolean,
            default: false
        },
        iconPosition: {
            type: String,
            default: "left",
            validator(value) {
                return !(value == "left" && value == "rigth");
            }
        }
    }
};
</script>
<style scoped>
@keyframes loading-animation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.loading-animation {
    animation: loading-animation 1s infinite linear;
}
.j-button {
    display: inline-flex;
    justify-content: center;
    align-content: center;
    vertical-align: middle;
    height: 32px;
    font-size: 14px;
    padding: 0 1em;
    color: #333;
    border: 1px solid #999;
    border-radius: 4px;
    background-color: white;
    outline: none;
    margin-left: 1em;
}
.j-button:hover {
    color: #666;
}
.j-button:active {
    background-color: #eee;
}
.svgicon {
    height: 1em;
    width: 1em;
    vertical-align: middle;
    margin-right: 0.2em;
    margin-top: 3px;
}
.icon-right .svgicon {
    order: 2;
    margin-top: 3px;
    margin-right: 0;
    margin-left: 0.2em;
}
.icon-right .btn-text {
    order: 1;
}
</style>
