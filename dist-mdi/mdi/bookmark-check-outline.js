import { h } from 'vue'
export default {
  $_icon: {
    name: "BookmarkCheckOutline",
    vendor: "Mdi",
    type: "",
    tags: ["bookmark","check","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-bookmark-check-outline","innerHTML":"<path d='M9.47 9.65L8.06 11.07L11 14L16.19 8.82L14.78 7.4L11 11.18M17 3H7C5.9 3 5 3.9 5 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3M17 18L12 15.82L7 18V5H17Z' />"},
    )
  }
}