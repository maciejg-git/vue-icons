import { h } from 'vue'
export default {
  $_icon: {
    name: "File",
    vendor: "Ph",
    type: "",
    tags: ["file"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-file","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M200.00039,224H55.99961A7.99981,7.99981,0,0,1,48,216V40a7.99981,7.99981,0,0,1,7.99961-8l96.00312,0L208,88V216A7.99981,7.99981,0,0,1,200.00039,224Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <polyline points='152 32 152 88 208.008 88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}