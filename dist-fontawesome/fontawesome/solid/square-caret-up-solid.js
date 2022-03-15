import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareCaretUp",
    vendor: "Fa",
    type: "Solid",
    tags: ["square","caret","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","class":"v-icon","fill":"currentColor","data-name":"fa-square-caret-up","innerHTML":"<path d='M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM349.1 305.6C346.2 314.3 337.5 320 328 320h-208c-9.531 0-18.19-5.656-22-14.41C94.19 296.8 95.91 286.7 102.4 279.7l104-112c9.125-9.75 26.06-9.75 35.19 0l104 112C352.1 286.7 353.8 296.8 349.1 305.6z'/>"},
    )
  }
}