import Input from './input/Input'
import Button from './button/Button'
import Checkbox from './checkbox/Checkbox.vue'
import CheckboxGroup from './checkbox/CheckboxGroup.vue'
import Radio from './radio/Radio.vue'
import Select from './select/Select.vue'
import Option from './select/Option.vue'
import Form from './form/Form.vue'
import FormItem from './form/FormItem.vue'
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import FormBuilder from './from-builder/FormBuilder.vue'

const components = [
  Input,
  Button,
  Checkbox,
  CheckboxGroup,
  Radio,
  Select,
  Option,
  Form,
  FormItem,
  FormBuilder
]

export default {
  install (Vue, options = {}) {
    Object.keys(rules).forEach(rule => {
      extend(rule, rules[rule])
    })

    Vue.component('ValidationProvider', ValidationProvider)
    Vue.component('ValidationObserver', ValidationObserver)

    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

export {
  Input,
  Button,
  Checkbox,
  CheckboxGroup,
  Radio,
  Select,
  Option,
  Form,
  FormItem,
  FormBuilder
}
