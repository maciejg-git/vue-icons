import { h } from 'vue'
export default {
  $_icon: {
    name: "Crop",
    vendor: "Mdi",
    type: "",
    tags: ["crop"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-crop","innerHTML":"<path d='M7,17V1H5V5H1V7H5V17A2,2 0 0,0 7,19H17V23H19V19H23V17M17,15H19V7C19,5.89 18.1,5 17,5H9V7H17V15Z' />"},
    )
  }
}