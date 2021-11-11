import { h } from 'vue'
export default {
  name: "Html5Line",
  vendor: "Rx",
  type: "",
  tags: ["html5","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-html5-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path fill-rule='nonzero' d='M12 18.178l-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2zm2.188 2L6.49 18.434 12 19.928l5.51-1.494L18.812 4H5.188z'/>    </g>"},
    )
  }
}