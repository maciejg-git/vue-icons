import { h } from 'vue'
export default {
  name: "NoteFill",
  vendor: "Ph",
  type: "",
  tags: ["note","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-note-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M208,32H48A16.01081,16.01081,0,0,0,32,48V208a16.01081,16.01081,0,0,0,16,16H156.6875A15.92313,15.92313,0,0,0,168,219.3125L219.3125,168A15.92313,15.92313,0,0,0,224,156.6875V48A16.01081,16.01081,0,0,0,208,32ZM96,88h64a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16Zm32,80H96a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16ZM96,136a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm64,68.6875V159.98438h44.70312Z'/>"},
    )
  }
}