import { h } from 'vue'
export default {
  $_icon: {
    name: "9",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["9"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z"}
        ) 
      ]
    )
  }
}