<template>
    <button @click="onClickButton">ボタン</button>
</template>

<script>
export default {
    name: "sample",
    props: {
        message: {type: String, required: true, default: 'hello!' },
    },
    emits: ['onClick'],
    methods: {
        onClickButton() {
            emit('onClick');
        },
    },
};
</script>