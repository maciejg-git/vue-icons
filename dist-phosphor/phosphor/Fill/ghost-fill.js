import { h } from 'vue'
export default {
  $_icon: {
    name: "GhostFill",
    vendor: "Ph",
    type: "",
    tags: ["ghost","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-ghost-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M128,24.00006A96.10871,96.10871,0,0,0,32,120v95.99994a7.9995,7.9995,0,0,0,13.06543,6.19141l24.26758-19.855,24.26855,19.855a8,8,0,0,0,10.13184,0L128,202.33638l24.2666,19.855a7.99878,7.99878,0,0,0,10.13184,0l24.26855-19.855,24.26758,19.855A7.9995,7.9995,0,0,0,224,215.99994V120A96.10871,96.10871,0,0,0,128,24.00006ZM100,128a12,12,0,1,1,12-12A12,12,0,0,1,100,128Zm56,0a12,12,0,1,1,12-12A12,12,0,0,1,156,128Z'/>"},
    )
  }
}