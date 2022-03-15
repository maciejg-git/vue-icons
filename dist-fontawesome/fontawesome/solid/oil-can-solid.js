import { h } from 'vue'
export default {
  $_icon: {
    name: "OilCan",
    vendor: "Fa",
    type: "Solid",
    tags: ["oil","can"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","class":"v-icon","fill":"currentColor","data-name":"fa-oil-can","innerHTML":"<path d='M288 128V160H368.9C378.8 160 388.6 162.3 397.5 166.8L448 192L615 156.2C633.1 152.3 645.7 173.8 633.5 187.7L451.1 394.3C438.1 408.1 421.5 416 403.1 416H144C117.5 416 96 394.5 96 368V346.7L28.51 316.7C11.17 308.1 0 291.8 0 272.8V208C0 181.5 21.49 160 48 160H224V128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H320C337.7 64 352 78.33 352 96C352 113.7 337.7 128 320 128L288 128zM96 208H48V272.8L96 294.1V208z'/>"},
    )
  }
}