import { h } from 'vue'
export default {
  $_icon: {
    name: "ToggleOff",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["toggle","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H192c-70.7 0-128-57.3-128-128s57.3-128 128-128H384zM576 256c0-106-86-192-192-192H192C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192zM192 352c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96s43 96 96 96z"}
        ) 
      ]
    )
  }
}