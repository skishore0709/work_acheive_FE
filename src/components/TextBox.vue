<template>
    <div>
      <label>{{ label }}</label>
      <input class="text-box" v-model="inputValue" :placeholder="placeholder" @input="onInput" />
    </div>
</template>
  

<script>
  export default {
    props: {
      label: String,
      placeholder: String,
    },
    data() {
      return {
        placeholder:'Reporting To.....',
      };
    },
    methods: {
      onInput() {
        // Emit an event with the current input value whenever the input changes
        this.$emit('input', this.inputValue);
      },
    },
  };
</script>
<style scoped>
.text-box{
    padding: 10px;
    border-radius: 20px;
    outline: none;
    border: 1px solid gray;
}
</style>