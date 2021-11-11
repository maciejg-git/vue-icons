import { h } from 'vue'
export default {
  name: "NotepadFill",
  vendor: "Ph",
  type: "",
  tags: ["notepad","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-notepad-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M200,32.00586H184v-8a8,8,0,1,0-16,0v8H136v-8a8,8,0,1,0-16,0v8H88v-8a8,8,0,0,0-16,0v8H56a16.01833,16.01833,0,0,0-16,16v152a32.03667,32.03667,0,0,0,32,32H184a32.03667,32.03667,0,0,0,32-32v-152A16.01833,16.01833,0,0,0,200,32.00586Zm-40,136H96a8,8,0,1,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,1,1,0-16h64a8,8,0,0,1,0,16Z'/>"},
    )
  }
}