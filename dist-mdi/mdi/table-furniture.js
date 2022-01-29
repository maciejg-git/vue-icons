import { h } from 'vue'
export default {
  $_icon: {
    name: "TableFurniture",
    vendor: "Mdi",
    type: "",
    tags: ["table","furniture"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-table-furniture","innerHTML":"<path d='M2 7H22V10H20L21 19H18.5L17.94 14H6.06L5.5 19H3L4 10H2V7M17.5 10H6.5L6.29 12H17.71L17.5 10Z' />"},
    )
  }
}