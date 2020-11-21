<template>
  <div class="components-select">
    <validation-provider :rules="rule" v-slot="{ errors }">
      <div class="components-select__header">
        <label :for="id">{{ title }}</label>
        <span>{{ errors[0] }}</span>
      </div>
      <select :id="id" v-model="selectData" @change="update">
        <option value="">-</option>
        <option
          v-for="item of select"
          :key="item"
          :value="item"
        >
          {{ item }}
        </option>
      </select>
    </validation-provider>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationProvider
  },
  data() {
    return {
      selectData: ''
    }
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
    select: {
      type: Array,
      required: true
    },
    rule: {
      type: String,
      default: ''
    }
  },
  methods: {
    update() {
      this.$emit('update', this.selectData)
    }
  },
  computed: {
  }
}
</script>

<style>
.components-select {
  width: 100%;
  margin-bottom: 30px;
}
.components-select select {
  width: 100%;
  border: none;
  border-bottom: 1px solid #000;
  background-color: transparent;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 2px;
  padding: 0 0 10px;
  appearance: icon;
}
.components-select select:focus {
  outline: none;
}
.components-select__header {
  display: flex;
  margin: 0 0 5px;
}
.components-select__header label {
  color: #918E8A;
}
.components-select__header span {
  color: #dc3545;
  display: block;
  margin-left: 6px;
}
@media screen and (min-width: 992px) {
  .components-select__header {
    margin: 0 0 12px;
  }
  .components-select select {
    margin: 0 0 16px;
    font-size: 24px;
  }
}
</style>
