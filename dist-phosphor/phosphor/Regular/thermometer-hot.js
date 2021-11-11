import { h } from 'vue'
export default {
  name: "ThermometerHot",
  vendor: "Ph",
  type: "",
  tags: ["thermometer","hot"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-thermometer-hot","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='120' cy='188' r='20' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='120' y1='168' x2='120' y2='48' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M240.28427,80A20,20,0,0,1,212,80a20,20,0,0,0-28.28427,0' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M240.28427,120A20,20,0,0,1,212,120a20,20,0,0,0-28.28427,0' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M88,147.02548V48a32,32,0,0,1,64,0v99.02548l.00787-.01006a52,52,0,1,1-64.01574,0Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}