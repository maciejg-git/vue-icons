import { h } from 'vue'
export default {
  $_icon: {
    name: "SendPlaneLine",
    vendor: "Rx",
    type: "",
    tags: ["send","plane","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-send-plane-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M1.923 9.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37zm4.89-.2l5.636 2.255 3.04 6.082 3.546-12.41L6.812 9.17z'/>    </g>"},
    )
  }
}