import { h } from 'vue'
export default {
  name: "NotificationThin",
  vendor: "Ph",
  type: "",
  tags: ["notification","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-notification-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M208,128v80a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h80' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <circle cx='196' cy='60' r='28' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}