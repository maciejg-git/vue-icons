import { h } from 'vue'
export default {
  name: "CameraRear",
  vendor: "Mdi",
  type: "",
  tags: ["camera","rear"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-camera-rear","innerHTML":"<path d='M12,6C10.89,6 10,5.1 10,4A2,2 0 0,1 12,2C13.09,2 14,2.9 14,4A2,2 0 0,1 12,6M17,0H7A2,2 0 0,0 5,2V16A2,2 0 0,0 7,18H17A2,2 0 0,0 19,16V2A2,2 0 0,0 17,0M14,20V22H19V20M10,20H5V22H10V24L13,21L10,18V20Z' />"},
    )
  }
}