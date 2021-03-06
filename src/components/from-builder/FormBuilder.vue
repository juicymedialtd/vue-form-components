<template>
  <div class="vue-form-builder">
    <vue-form
      ref="form"
      :model="clonedModel"
      :label-position="options.labelPosition"
      :label-width="options.labelWidth"
      data-vv-scope="form-1"
    >
      <div
        v-for="(group, groupIndex) in schema"
        :key="groupIndex"
        class="vue-form-group"
      >
        <tag
          :is="group.headingTag"
          v-if="group.heading && group.headingTag"
          class="vue-form-group-heading"
        >
          {{ group.heading }}
        </tag>
        <vue-form-item
          v-for="(field, index) in group.fields"
          :key="field.label + index"
          :item-id="generateId(field.label + index)"
          :label="field.label"
          :field="field.model"
          :class="field.class"
        >
          <!-- Input -->
          <template
            v-if="field.type === 'input'"
          >
            <vue-input
              :key="field.name + index"
              :ref="field.name"
              v-model="clonedModel[field.model]"
              :item-id="generateId(field.label + index)"
              :type="field.inputType"
              :name="field.name"
              :readonly="field.readonly"
              :placeholder="field.placeholder"
              :disabled="field.disabled"
              :validate="field.validate"
              @input="onUpdate"
              @blur="onBlur"
            />
          </template>
          <!-- Select -->
          <template v-if="field.type === 'select'">
            <vue-select
              v-model="clonedModel[field.model]"
              :item-id="generateId(field.label + index)"
              :data="field.options"
              :name="field.name"
              :placeholder="field.placeholder"
              :multiple="Array.isArray(clonedModel[field.model])"
              :validate="field.validate"
              @change="onUpdate"
            >
              <vue-option
                v-for="i in field.options"
                :key="i.value"
                :value="i.value"
                :label="i.label"
              />
            </vue-select>
          </template>
          <!-- Checkbox -->
          <template v-if="field.type === 'checkbox'">
            <vue-checkbox-group
              v-if="Array.isArray(clonedModel[field.model])"
              v-model="clonedModel[field.model]"
              :name="field.name"
              @change="onUpdate"
            >
              <vue-checkbox
                v-for="i in field.options"
                :key="i.value"
                :type="field.inputType"
                :value="i.value"
                :label="i.label"
                :field-name="field.name"
                :validate="field.validate"
              />
            </vue-checkbox-group>
            <vue-checkbox
              v-else
              v-model="clonedModel[field.model]"
              :type="field.inputType"
              :name="field.name"
              :label="field.checkboxLabel"
              :validate="field.validate"
              :field-name="field.name"
              @change="onUpdate"
            />
          </template>
          <!-- Radio -->
          <template v-if="field.type === 'radio'">
            <vue-radio
              v-for="i in field.options"
              :key="i.value"
              v-model="clonedModel[field.model]"
              :type="field.inputType"
              :name="field.name"
              :value="i.value"
              :label="i.label"
              :validate="field.validate"
              @change="onUpdate"
            />
          </template>
          <!-- Actions -->
          <template v-if="field.type === 'actions'">
            <vue-button
              v-for="(i, idx) in field.buttons"
              :key="idx"
              :type="i.buttonType"
              :button-class="i.class"
              @click="onAction(i.type)"
            >
              {{ i.buttonLabel }}
            </vue-button>
          </template>
        </vue-form-item>
      </div>
    </vue-form>
  </div>
</template>

<script>
import Form from '../form/Form'
import FormItem from '../form/FormItem'
import Input from '../input/Input'
import Checkbox from '../checkbox/Checkbox'
import CheckboxGroup from '../checkbox/CheckboxGroup'
import Radio from '../radio/Radio'
import Select from '../select/Select'
import Option from '../select/Option'
import Button from '../button/Button'
import { cloneShallow } from '@/utils'

export default {
  name: 'VueFormBuilder',

  components: {
    VueForm: Form,
    VueFormItem: FormItem,
    VueInput: Input,
    VueCheckbox: Checkbox,
    VueCheckboxGroup: CheckboxGroup,
    VueRadio: Radio,
    VueSelect: Select,
    VueOption: Option,
    VueButton: Button
  },

  model: {
    prop: 'model',
    event: 'update'
  },

  props: {
    model: {
      type: Object,
      default: () => {
      }
    },
    schema: {
      type: Array,
      default: () => {
      }
    },
    options: {
      type: Object,
      default: () => {
        return {
          labelPosition: undefined,
          labelWidth: undefined
        }
      }
    }
  },

  data () {
    return {
      clonedModel: {}
    }
  },

  created () {
    this.clonedModel = cloneShallow(this.model)
  },

  mounted () {
    // Hack to update validation
    this.$forceUpdate()
  },

  methods: {
    isSelectMultiple (value) {
      return Array.isArray(value)
    },
    onUpdate () {
      this.$emit('update', this.clonedModel)
    },
    onBlur () {
      this.$emit('blur', this.clonedModel)
    },
    onAction (e) {
      this.$emit('action', { type: e, form: this.$refs.form })
    },
    generateId (label) {
      if (label) return label.replace(/\s+/g, '')
      return ''
    }
  }
}
</script>

<style lang="scss">

</style>
