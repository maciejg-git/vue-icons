import { h } from 'vue'
export default {
  $_icon: {
    name: "SortVariantOff",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["sort","variant","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-sort-variant-off"},
      [ 
        h(
          "path",
          {"d":"M20.84 22.73L11.11 13H3V11H9.11L6.11 8H3V6H4.11L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M15 11H14.2L15 11.8V11M21 8V6H9.2L11.2 8H21M3 18H9V16H3V18Z"}
        ) 
      ]
    )
  }
}