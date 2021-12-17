import { h } from 'vue'
export default {
  name: "StarSLine",
  vendor: "Rx",
  type: "",
  tags: ["star","s","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-star-s-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17zm0-2.344l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708l-1.268 3.047-3.29.264 2.507 2.147-.766 3.21L12 14.657z'/>    </g>"},
    )
  }
}