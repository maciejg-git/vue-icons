import { h } from 'vue'
export default {
  $_icon: {
    name: "HourglassEmpty",
    vendor: "Fa",
    type: "Solid",
    tags: ["hourglass","empty"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","class":"v-icon","fill":"currentColor","data-name":"fa-hourglass-empty","innerHTML":"<path d='M0 32C0 14.33 14.33 0 32 0H352C369.7 0 384 14.33 384 32C384 49.67 369.7 64 352 64V74.98C352 117.4 335.1 158.1 305.1 188.1L237.3 256L305.1 323.9C335.1 353.9 352 394.6 352 437V448C369.7 448 384 462.3 384 480C384 497.7 369.7 512 352 512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448V437C32 394.6 48.86 353.9 78.86 323.9L146.7 256L78.86 188.1C48.86 158.1 32 117.4 32 74.98V64C14.33 64 0 49.67 0 32zM96 64V74.98C96 100.4 106.1 124.9 124.1 142.9L192 210.7L259.9 142.9C277.9 124.9 288 100.4 288 74.98V64H96zM96 448H288V437C288 411.6 277.9 387.1 259.9 369.1L192 301.3L124.1 369.1C106.1 387.1 96 411.6 96 437V448z'/>"},
    )
  }
}