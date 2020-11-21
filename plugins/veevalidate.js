import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("email", {
  validate: (value) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(value)
  },
  message: "請輸入正確 e-mail 格式"
});

extend("code", {
  validate: (value) => {
    const regex = /^\d+$/
    return regex.test(value)
  },
  message: "請輸入五位驗證碼"
});

extend("password", {
  validate: (value) => {
    const regex = /^(?=.*[a-zA-Z\\d])(?=.*[a-zA-Z]).{6,30}$/
    return regex.test(value)
  },
  message: "字元數不能小於 6 且字元數不能大於 30"
});

extend("phone", {
  validate: (value) => {
    const regex = /^[0][0-9]{7,9}$/
    return regex.test(value)
  },
  message: "應為 0 開頭 8-10 個數字"
});

extend("nickname", {
  validate: (value) => {
    const regex = /^(.{1,15})$/
    return regex.test(value)
  },
  message: "字元數不能超過 15 位"
});

extend("required", {
  ...required,
  message: "這個區塊必須被填寫"
});
