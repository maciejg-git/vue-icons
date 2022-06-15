import { h } from 'vue'
export default {
  $_icon: {
    name: "EjectCircle",
    vendor: "Mdi",
    type: "",
    tags: ["eject","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-eject-circle","innerHTML":"<path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M16.5 16H7.5V14H16.5V16M7.5 12L12 6L16.5 12H7.5Z' />"},
    )
  }
}