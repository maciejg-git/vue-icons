import { h } from 'vue'
export default {
  $_icon: {
    name: "Printer3dNozzleAlert",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["printer","3d","nozzle","alert"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7 2H17V8H19V13H16.5L13 17H11L7.5 13H5V8H7V2M10 22H2V20H10C10.6 20 11 19.5 11 19V18H13V19C13 20.7 11.7 22 10 22M21 13V7H23V13H21M21 17V15H23V17H21Z"}
        ) 
      ]
    )
  }
}