import { h } from 'vue'
export default {
  $_icon: {
    name: "GeoAltFill",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["geo","alt","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-geo-alt-fill"},
      [ 
        h(
          "path",
          {"d":"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}
        ) 
      ]
    )
  }
}