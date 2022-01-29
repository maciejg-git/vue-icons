import { h } from 'vue'
export default {
  $_icon: {
    name: "BookmarkPlus",
    vendor: "Mdi",
    type: "",
    tags: ["bookmark","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-bookmark-plus","innerHTML":"<path d='M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,7V9H9V11H11V13H13V11H15V9H13V7H11Z' />"},
    )
  }
}