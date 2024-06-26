import { h } from 'vue'
export default {
  $_icon: {
    name: "UsbCFill",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["usb","c","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M3 5a3 3 0 0 0 0 6h10a3 3 0 1 0 0-6zm.5 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1"}
        ) 
      ]
    )
  }
}