import { h } from 'vue'
export default {
  name: "FireExtinguisher",
  vendor: "Mdi",
  type: "",
  tags: ["fire","extinguisher"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-fire-extinguisher","innerHTML":"<path d='M10.5,7H11.75L12,5H10.25L6,7.5V9H4V6.5L10,3H12V2H14V3H16L17,2.5V5.5L16,5H14L14.25,7H15.5A1.5,1.5 0 0,1 17,8.5V22H9V8.5A1.5,1.5 0 0,1 10.5,7Z' />"},
    )
  }
}