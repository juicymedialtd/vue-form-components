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
      responder: null,
      date: null,
      time: null
    },
    schema: [
      {
        heading: 'Call',
        headingTag: 'h3',
        fields: [
          {
            type: 'input',
            inputType: 'date',
            label: 'Date',
            name: 'date',
            model: 'date',
            class: 'FormItem--3',
            validate: {
              required: true
            }
          },
          {
            type: 'input',
            inputType: 'time',
            label: 'Time',
            name: 'time',
            model: 'time',
            class: 'FormItem--3',
            validate: {
              required: true
            }
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
              min: 10
            }
          }
        ]
      },
      {
        fields: [
          {
            type: 'input',
            inputType: 'date',
            label: 'Date',
            name: 'date',
            model: 'date',
            class: 'FormItem--3',
            validate: {
              required: true
            }
          },
          {
            type: 'input',
            inputType: 'time',
            label: 'Time',
            name: 'time',
            model: 'time',
            class: 'FormItem--3',
            validate: {
              required: true
            }
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
              min: 10
            }
          }
        ]
      }
    ],
    formOptions: {
      labelPosition: 'top'
    }
  }),

  methods: {
    async onAction (e) {

    },

    async updated (data) {

    }
  }
}
</script>

<style lang="scss">
  .dev {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
