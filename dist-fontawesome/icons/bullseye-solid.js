import { h } from 'vue'
export default {
  $_icon: {
    name: "Bullseye",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["bullseye"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192zm64 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80zm0 64c-79.5 0-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144zm32-144c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"}
        ) 
      ]
    )
  }
}