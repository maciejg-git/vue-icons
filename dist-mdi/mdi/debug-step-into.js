import { h } from 'vue'
export default {
  $_icon: {
    name: "DebugStepInto",
    vendor: "Mdi",
    type: "",
    tags: ["debug","step","into"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-debug-step-into","innerHTML":"<path d='M12,22A2,2 0 0,1 10,20A2,2 0 0,1 12,18A2,2 0 0,1 14,20A2,2 0 0,1 12,22M13,2V13L17.5,8.5L18.92,9.92L12,16.84L5.08,9.92L6.5,8.5L11,13V2H13Z' />"},
    )
  }
}