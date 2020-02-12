<template>
  <div
    class="vue-form__item"
  >
    <label
      v-if="label || form.labelPosition !== 'top'"
      :for="itemId"
      :style="{'flex-basis': form.labelWidth }"
      class="vue-form__item-label"
    >
      {{ label }}
    </label>
    <div class="vue-form__item-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueFormItem',

  inject: ['form'],

  props: {
    itemId: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    field: {
      type: String,
      default: ''
    }
  }
}

</script>

<style lang="scss">
.form-slide-fade-enter-active {
  transition: all 0.2s;
}
.form-slide-fade-leave-active {
  transition: all 0.2s;
}
.form-slide-fade-enter,
.form-slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
