<template>
  <label class="qw-input">
    <input :value="value"
           :id="id"
           :placeholder="placeholder"
           :disabled="disabled"
           :readonly="readonly"
           :autofocus="autofocus"
           :type="type"
           :class="{'qw-input__input--with-error': errorText}"
           ref="input"
           class="qw-input__input"
           @input="catchInput" />
    <p v-if="errorText"
       class="qw-input__error-text">{{ errorText }}</p>
  </label>
</template>

<script>
  export default {
    props: {
      type: {type: String, default: 'text'},
      errorText: {type: String},
      disabled: {type: Boolean, default: false},
      readonly: {type: Boolean},
      value: {type: [String, Number], required: true},
      placeholder: {type: String},
      id: {type: [Number, String]},
      autofocus: {type: Boolean},
      classes: {type: Array}
    },
    methods: {
      catchInput() {}
    }
  }
</script>

<style scoped>
  .qw-input {
    display: block;
    width: 100%;
  }
  .qw-input__input {
    display: block;
    width: 100%;
    padding: 0 10px;
    height: 35px;
    border: 1px solid #cbcbcb;
    border-radius: 3px;
  }
  .qw-input__input--with-error {
    border: 1px solid rgba(255, 0, 0, 0.6);
  }
  .qw-input__error-text {
    display: block;
    width: 100%;
    margin-top: 5px;
    font-size: 10px;
    color: #ff0000;
  }
</style>

