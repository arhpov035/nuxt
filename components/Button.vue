<template>
  <button @click="action">{{ btnValue }}</button>
</template>

<script>
export default {
    props: {
        btnValue: {
            type: String,
            required: true,
        },
        action: {
            type: Function,
            required: true
        }
    }
}
</script>

<style>

</style>