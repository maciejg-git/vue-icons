import { h } from 'vue'
export default {
  $_icon: {
    name: "BridgeCircleExclamation",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["bridge","circle","exclamation"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M64 32C46.3 32 32 46.3 32 64s14.3 32 32 32h40v64H32V288c53 0 96 43 96 96v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V384c0-53 43-96 96-96c6.3 0 12.4 .6 18.3 1.7C367.1 231.8 426.9 192 496 192c42.5 0 81.6 15.1 112 40.2V160H536V96h40c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM488 96v64H408V96h80zM360 96v64H280V96h80zM232 96v64H152V96h80zM496 512c79.5 0 144-64.5 144-144s-64.5-144-144-144s-144 64.5-144 144s64.5 144 144 144zm0-48c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm0-192c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16V288c0-8.8 7.2-16 16-16z"}
        ) 
      ]
    )
  }
}