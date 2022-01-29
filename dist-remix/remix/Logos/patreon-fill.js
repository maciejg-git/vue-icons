import { h } from 'vue'
export default {
  $_icon: {
    name: "PatreonFill",
    vendor: "Rx",
    type: "",
    tags: ["patreon","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-patreon-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M15 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zM2 2h4v20H2V2z'/>    </g>"},
    )
  }
}