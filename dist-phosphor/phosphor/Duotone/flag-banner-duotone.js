import { h } from 'vue'
export default {
  $_icon: {
    name: "FlagBannerDuotone",
    vendor: "Ph",
    type: "",
    tags: ["flag","banner","duotone"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-flag-banner-duotone","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polygon points='40 48 40 48 224 48 176 108 224 168 40 168 40 48' opacity='0.2'/>  <polyline points='40 216 40 48 40 48 224 48 176 108 224 168 40 168' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}