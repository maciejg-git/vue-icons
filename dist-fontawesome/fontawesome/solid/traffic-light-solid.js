import { h } from 'vue'
export default {
  $_icon: {
    name: "TrafficLight",
    vendor: "Fa",
    type: "Solid",
    tags: ["traffic","light"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","class":"v-icon","fill":"currentColor","data-name":"fa-traffic-light","innerHTML":"<path d='M256 0C291.3 0 320 28.65 320 64V352C320 440.4 248.4 512 160 512C71.63 512 0 440.4 0 352V64C0 28.65 28.65 0 64 0H256zM160 320C133.5 320 112 341.5 112 368C112 394.5 133.5 416 160 416C186.5 416 208 394.5 208 368C208 341.5 186.5 320 160 320zM160 288C186.5 288 208 266.5 208 240C208 213.5 186.5 192 160 192C133.5 192 112 213.5 112 240C112 266.5 133.5 288 160 288zM160 64C133.5 64 112 85.49 112 112C112 138.5 133.5 160 160 160C186.5 160 208 138.5 208 112C208 85.49 186.5 64 160 64z'/>"},
    )
  }
}