<template>
  <button>{{ btnValue }}</button>
</template>

<script>
export default {
  props: {
    btnValue: {
      type: String,
      required: true
    }
  }
}
</script>
