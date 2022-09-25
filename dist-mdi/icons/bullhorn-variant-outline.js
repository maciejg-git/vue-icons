import { h } from 'vue'
export default {
  $_icon: {
    name: "BullhornVariantOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bullhorn","variant","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-bullhorn-variant-outline"},
      [ 
        h(
          "path",
          {"d":"M20 2V4L4 8V6H2V18H4V16L6 16.5V18.5C6 20.4 7.6 22 9.5 22S13 20.4 13 18.5V18.3L20 20V22H22V2H20M11 18.5C11 19.3 10.3 20 9.5 20S8 19.3 8 18.5V17L11 17.8V18.5M20 18L4 14V10L20 6V18Z"}
        ) 
      ]
    )
  }
}