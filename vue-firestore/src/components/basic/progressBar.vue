<template>
  <div
    :style="`width:${completed}%`"
    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
  ></div>
</template>

<script>
export default {
  props: {
    completed: {
      required: true,
      type: String
    }
  }
};
</script>
