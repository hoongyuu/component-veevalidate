<template>
  <div class="components-input">
    <validation-provider v-slot="{ errors }" :rules="rule">
      <div class="components-input__header">
        <label :for="id">{{ title }}</label>
        <span>{{ errors[0] }}</span>
      </div>
      <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        v-model="syncContent"
      />
      <button class="components-input-btn" type="button" v-if="sendCode">寄送驗證碼</button>
      <button class="components-input-btn" type="button" v-if="storage">儲存</button>
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
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    rule: {
      type: String,
      default: ''
    },
    sendCode: {
      type: Boolean,
      default: false
    },
    storage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    syncContent: {
      get() {
        return this.content
      },
      set(val) {
        this.$emit('update:content', val)
      }
    }
  }
}
</script>

<style>
.components-input {
  width: 100%;
  position: relative;
}
.components-input input {
  width: 100%;
  padding: 5px 0;
  border: none;
  border-bottom: 1px solid #000;
  background-color: transparent;
  color: #1E4F7E;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 2px;
}
.components-input input[type=number] {
  -moz-appearance: textfield;
}
.components-input input[type=number]::-webkit-inner-spin-button,
.components-input input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.components-input input:focus {
  outline: none;
}
.components-input input::placeholder {
  opacity: 0.4;
}
.components-input input:-webkit-autofill {
  -webkit-text-fill-color: #1E4F7E;
  -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  transition: background-color 5000s ease-in-out 0s;
}
.components-input-btn {
  display: inline-block;
  border: none;
  background-color: transparent;
  color: #1E4F7E;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 2px;
  padding: 0;
  margin: 5px 0 0;
}
.components-input-btn:focus {
  outline: none;
}
.components-input__header {
  display: flex;
  margin: 0 0 5px;
}
.components-input__header label {
  color: #918E8A;
}
.components-input__header span {
  color: #dc3545;
  display: block;
  margin-left: 6px;
}

@media screen and (min-width: 992px) {
  .components-input-btn {
    position: absolute;
    bottom: 16px;
    right: 0;
  }
  .components-input__header label {
    margin: 0 0 11px;
  }
  .components-input input {
    padding: 0 0 15px;
    font-size: 24px;
  }
}
</style>
