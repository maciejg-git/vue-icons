import { h } from 'vue'
export default {
  name: "Radius",
  vendor: "Mdi",
  type: "",
  tags: ["radius"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-radius","innerHTML":"<path d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,15V13H13.72C13.36,13.62 12.71,14 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10C12.71,10 13.36,10.38 13.72,11H17V9L20,12L17,15Z' />"},
    )
  }
}