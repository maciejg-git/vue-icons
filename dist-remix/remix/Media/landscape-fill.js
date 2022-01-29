import { h } from 'vue'
export default {
  $_icon: {
    name: "LandscapeFill",
    vendor: "Rx",
    type: "",
    tags: ["landscape","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-landscape-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M16 21l-4.762-8.73L15 6l8 15h-7zM8 10l6 11H2l6-11zM5.5 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z'/>    </g>"},
    )
  }
}