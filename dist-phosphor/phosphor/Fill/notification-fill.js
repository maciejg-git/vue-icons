import { h } from 'vue'
export default {
  $_icon: {
    name: "NotificationFill",
    vendor: "Ph",
    type: "",
    tags: ["notification","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-notification-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M216,128v80a16.01833,16.01833,0,0,1-16,16H48a16.01833,16.01833,0,0,1-16-16V56A16.01833,16.01833,0,0,1,48,40h80a8,8,0,0,1,0,16H48V208H200V128a8,8,0,0,1,16,0ZM196,24a36,36,0,1,0,36,36A36.04061,36.04061,0,0,0,196,24Z'/>"},
    )
  }
}