import { h } from 'vue'
export default {
  $_icon: {
    name: "ShieldCheckFill",
    vendor: "Rx",
    type: "",
    tags: ["shield","check","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-shield-check-fill","innerHTML":"    <g>        <path fill='none' d='M0 0H24V24H0z'/>        <path d='M12 1l8.217 1.826c.457.102.783.507.783.976v9.987c0 2.006-1.003 3.88-2.672 4.992L12 23l-6.328-4.219C4.002 17.668 3 15.795 3 13.79V3.802c0-.469.326-.874.783-.976L12 1zm4.452 7.222l-4.95 4.949-2.828-2.828-1.414 1.414L11.503 16l6.364-6.364-1.415-1.414z'/>    </g>"},
    )
  }
}