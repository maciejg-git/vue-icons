import { h } from 'vue'
export default {
  $_icon: {
    name: "File2Line",
    vendor: "Rx",
    type: "",
    tags: ["file","2","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-file-2-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M3 8l6.003-6h10.995C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8zm7-4v5H5v11h14V4h-9z'/>    </g>"},
    )
  }
}