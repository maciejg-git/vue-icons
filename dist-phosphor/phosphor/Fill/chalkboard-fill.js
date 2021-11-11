import { h } from 'vue'
export default {
  name: "ChalkboardFill",
  vendor: "Ph",
  type: "",
  tags: ["chalkboard","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-chalkboard-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M240,192h-8V56a16.01833,16.01833,0,0,0-16-16H40A16.01833,16.01833,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-24,0H144V176a7.99993,7.99993,0,0,1,8-8h56a7.99993,7.99993,0,0,1,8,8Zm0-48a8,8,0,0,1-16,0V72H56V184a8,8,0,0,1-16,0V64a8.00008,8.00008,0,0,1,8-8H208a8.00008,8.00008,0,0,1,8,8Z'/>"},
    )
  }
}