import { h } from 'vue'
export default {
  $_icon: {
    name: "DoorClosed",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["door","closed"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-door-closed"},
      [ 
        h(
          "path",
          {"d":"M560 448H480V50.75C480 22.75 458.5 0 432 0h-288C117.5 0 96 22.75 96 50.75V448H16C7.125 448 0 455.1 0 464v32C0 504.9 7.125 512 16 512h544c8.875 0 16-7.125 16-16v-32C576 455.1 568.9 448 560 448zM384 288c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S401.6 288 384 288z"}
        ) 
      ]
    )
  }
}