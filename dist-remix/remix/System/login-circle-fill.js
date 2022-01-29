import { h } from 'vue'
export default {
  $_icon: {
    name: "LoginCircleFill",
    vendor: "Rx",
    type: "",
    tags: ["login","circle","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-login-circle-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M10 11H2.05C2.55 5.947 6.814 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-5.185 0-9.449-3.947-9.95-9H10v3l5-4-5-4v3z'/>    </g>"},
    )
  }
}