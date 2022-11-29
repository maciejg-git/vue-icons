import { h } from 'vue'
export default {
  $_icon: {
    name: "6",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["6"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM64 320c0-53 43-96 96-96s96 43 96 96s-43 96-96 96s-96-43-96-96z"}
        ) 
      ]
    )
  }
}