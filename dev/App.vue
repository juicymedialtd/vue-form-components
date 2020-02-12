<template>
  <div class="dev">
    <h1>Workbench</h1>
    <VueFormBuilder
      ref="form"
      v-model="model"
      :schema="schema"
      :options="schema.formOptions"
      @action="onAction"
      @update="updated"
    />
  </div>
</template>

<script>
export default {
  name: '',

  data: () => ({
    model: {
      id: null,
      name: null,
      password: null,
      passwordConfirm: null,
      skills: [],
      email: null,
      status: null,
      addons: [],
      delivery: null,
      comment: null,
      notes: null,
    },
    schema: {
      fields: [
        {
          type: 'input',
          inputType: 'input',
          label: 'ID',
          name: 'input',
          model: 'id',
          validate: {
            required: true,
          },
        },
        {
          type: 'input',
          inputType: 'input',
          label: 'Email',
          name: 'email',
          placeholder: 'Type email',
          model: 'email',
          validate: {
            required: true,
            email: true,
          },
        },
        {
          type: 'input',
          inputType: 'password',
          label: 'Password',
          name: 'password',
          placeholder: 'Type password',
          model: 'password',
          validate: {
            required: true,
          },
        },
        {
          type: 'input',
          inputType: 'password',
          label: 'Password confirm',
          name: 'passwordConfirm',
          placeholder: 'Confirm password',
          model: 'passwordConfirm',
          validate: {
            required: true,
            confirmed: 'password',
          },
        },
        {
          type: 'checkbox',
          label: 'Addons',
          name: 'addons',
          model: 'addons',
          class: 'FormItem--3',
          options: [
            {
              label: 'label 1',
              value: 1,
            },
            {
              label: 'label 2',
              value: 2,
            },
            {
              label: 'label 3',
              value: 3,
            },
          ],
          validate: {
            required: true,
          },
        },
        {
          type: 'radio',
          label: 'Delivery',
          name: 'delivery',
          model: 'delivery',
          class: 'FormItem--3',
          options: [
            {
              label: 'label 1',
              value: 1,
            },
            {
              label: 'label 2',
              value: 2,
            },
            {
              label: 'label 3',
              value: 3,
            },
          ],
          validate: {
            required: true,
          },
        },
        {
          type: 'input',
          inputType: 'textarea',
          name: 'comment',
          label: 'Comment',
          model: 'comment',
          class: 'FormItem--12',
          validate: {
            required: true,
            min: 10,
          },
        },
        {
          type: 'input',
          inputType: 'textarea',
          name: 'notes',
          label: 'Notes',
          model: 'notes',
          class: 'FormItem--12',
        },
        {
          type: 'actions',
          class: 'FormItem--12 ButtonContainer ButtonContainer--Right',
          buttons: [
            {
              type: 'cancel',
              buttonType: 'default',
              buttonLabel: 'Cancel',
              class: 'Button',
            },
            {
              type: 'submit',
              buttonType: 'success',
              buttonLabel: 'Submit',
              class: 'Button Button--Success',
            },
          ],
        },
      ],
      formOptions: {
        labelPosition: 'top',
        labelWidth: '120px',
      },
    },
  }),

  methods: {
    async onAction(e) {

    },

    async updated(data) {

    },
  },
}
</script>

<style lang="scss">
  .dev {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
