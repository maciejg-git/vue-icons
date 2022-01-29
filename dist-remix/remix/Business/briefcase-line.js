import { h } from 'vue'
export default {
  $_icon: {
    name: "BriefcaseLine",
    vendor: "Rx",
    type: "",
    tags: ["briefcase","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-briefcase-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zM4 16v3h16v-3H4zm0-2h16V7H4v7zM9 3v2h6V3H9zm2 8h2v2h-2v-2z'/>    </g>"},
    )
  }
}