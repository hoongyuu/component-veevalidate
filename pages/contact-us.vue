<template>
  <div class="pages-contact-us">
    <div class="pages-contact-us__main">
      <validation-observer v-slot="{ invalid }">
        <form @submit.prevent="send()">
          <components-input
            class="pages-contact-us__main-input"
            :content.sync="user.name"
            id="pages-contact-us__faq-user-name"
            title="如何稱呼您"
            placeholder="請輸入名稱"
            rule="nickname|required"
          />
          <components-input
            class="pages-contact-us__main-input"
            :content.sync="user.email"
            id="pages-contact-us__faq-user-email"
            title="信箱"
            placeholder="請輸入信箱"
            rule="email"
            type="email"
            :storage="test"
          />
          <components-input
            class="pages-contact-us__main-input"
            :content.sync="user.phone"
            id="pages-contact-us__faq-user-phone"
            title="聯絡電話"
            placeholder="請輸入電話號碼"
            rule="phone"
            type="number"
          />
          <components-input
            class="pages-contact-us__main-input"
            :content.sync="user.unit"
            id="pages-contact-us__faq-user-unit"
            title="單位名稱"
            placeholder="請輸入單位名稱"
          />

          <components-textarea
            :content.sync="user.message"
            id="pages-contact-us__faq-user-message"
            title="你需要哪些協助呢"
            placeholder="告訴我訊息"
            maxlength="300"
            class="pages-contact-us__main-textarea"
          ></components-textarea>

          <components-select
            id="pages-contact-us__faq-user-select"
            title="教材主要使用者"
            rule="required"
            :select="selectData"
            @update="user.identity = $event"
          ></components-select>

          <button type="submit"
            class="pages-contact-us__main-btn"
            :class="{ 'pages-contact-us__main-btn--disabled': invalid }">
              送出
          </button>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import ComponentsInput from "@/components/Form/Input";
import ComponentsTextarea from "@/components/Form/Textarea";
import ComponentsSelect from "@/components/Form/Select";

export default {
  components: {
    ValidationObserver,
    ComponentsInput,
    ComponentsTextarea,
    ComponentsSelect
  },
  data() {
    return {
      test: true,
      user: {
        name: '',
        email: '',
        phone: '',
        unit: '',
        message: '',
        identity: ''
      },
      selectData: ['學生', '家長']
    }
  },
  methods: {
    send() {
      console.log('success');
    }
  },
  computed: {
    length() {
      return this.user.message.length
    }
  }
}
</script>

<style>
.pages-contact-us {
  margin: 0 auto;
  padding: 50px 27px 50px 28px;
  background-color: #F4EEE7;
}
.pages-contact-us__main {
  max-width: 720px;
  margin: 0 auto;
}
.pages-contact-us__main-input {
  margin: 0 0 16px;
}
.pages-contact-us__main-textarea {
  margin: 0 0 80px;
}
.pages-contact-us__main-btn {
  width: 100%;
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  padding: 10px 0;
  text-align: center;
  letter-spacing: 1px;
}
.pages-contact-us__main-btn--disabled {
  background-color: #666;
  color: #fff;
  pointer-events: none;
}

@media screen and (min-width: 992px) {
  .pages-contact-us__main-input {
    margin: 0 0 30px;
  }
  .pages-contact-us__main-textarea {
    margin: 0 0 60px;
  }
  .pages-contact-us__main-btn {
    display: block;
    margin: 0 auto;
    width: 320px;
  }
}
</style>
