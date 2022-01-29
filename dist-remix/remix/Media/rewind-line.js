import { h } from 'vue'
export default {
  $_icon: {
    name: "RewindLine",
    vendor: "Rx",
    type: "",
    tags: ["rewind","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-rewind-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M12 10.667l9.223-6.149a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L12 13.333v5.733a.5.5 0 0 1-.777.416L.624 12.416a.5.5 0 0 1 0-.832l10.599-7.066a.5.5 0 0 1 .777.416v5.733zm-2 5.596V7.737L3.606 12 10 16.263zm10 0V7.737L13.606 12 20 16.263z'/>    </g>"},
    )
  }
}