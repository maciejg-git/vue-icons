import { h } from 'vue'
export default {
  $_icon: {
    name: "AirplayLine",
    vendor: "Rx",
    type: "",
    tags: ["airplay","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-airplay-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M12.4 13.533l5 6.667a.5.5 0 0 1-.4.8H7a.5.5 0 0 1-.4-.8l5-6.667a.5.5 0 0 1 .8 0zM12 16.33L10 19h4l-2-2.67zM18 19v-2h2V5H4v12h2v2H2.992A.994.994 0 0 1 2 18V4c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H18z'/>    </g>"},
    )
  }
}