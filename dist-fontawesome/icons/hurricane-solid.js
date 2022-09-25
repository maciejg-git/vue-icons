import { h } from 'vue'
export default {
  $_icon: {
    name: "Hurricane",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["hurricane"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-hurricane"},
      [ 
        h(
          "path",
          {"d":"M224 223.1c-17.75 0-32 14.25-32 32c0 17.75 14.25 32 32 32s32-14.25 32-32C256 238.2 241.8 223.1 224 223.1zM208 95.98l24.5-74.74c3.75-11.25-5.615-22.49-17.36-21.11C112 12.38 32 101.6 32 208c0 114.9 93.13 208 208 208l-24.5 74.73c-3.75 11.25 5.615 22.5 17.36 21.12C335.1 499.6 416 410.4 416 304C416 189.1 322.9 95.98 208 95.98zM224 351.1c-53 0-96-43-96-96s43-96 96-96s96 43 96 96S277 351.1 224 351.1z"}
        ) 
      ]
    )
  }
}