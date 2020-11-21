<template>
  <div class="components-textarea">
    <validation-provider :rules="rule">
      <div class="components-textarea__header">
        <label :for="id">{{ title }}</label>
        <span>{{ length }}/{{ maxlength }}</span>
      </div>
      <textarea
        :id="id"
        :placeholder="placeholder"
        :maxlength="maxlength"
        v-model="syncContent"
      />
    </validation-provider>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationProvider
  },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    maxlength: {
      default: 300
    },
    placeholder: {
      type: String,
      default: ''
    },
    rule: {
      type: String,
      default: ''
    },
  },
  computed: {
    syncContent: {
      get() {
        return this.content
      },
      set(val) {
        this.$emit('update:content', val)
      }
    },
    length() {
      return this.content.length
    }
  }
}
</script>

<style>
.components-textarea {
  width: 100%;
}
.components-textarea textarea {
  width: 100%;
  height: 135px;
  border: none;
  border-bottom: 1px solid #000;
  background-color: transparent;
  color: #1E4F7E;
  padding: 0;
  font-size: 20px;
  letter-spacing: 2px;
  line-height: 30px;
  resize: none;
}
.components-textarea textarea:focus {
  outline: none;
}
.components-textarea textarea::placeholder {
  opacity: 0.4;
}
.components-textarea__header {
  display: flex;
  margin: 0 0 3px;
}
.components-textarea__header label {
  display: block;
  color: #918E8A;
}
.components-textarea__header span {
  color: #918E8A;
  display: block;
  margin-left: 6px;
}
@media screen and (min-width: 992px) {
  .components-textarea textarea {
    height: 115px;
  }
  .components-textarea__header {
    margin: 0 0 10px;
  }
}
</style>
