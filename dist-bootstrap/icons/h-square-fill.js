import { h } from 'vue'
export default {
  $_icon: {
    name: "HSquareFill",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["h","square","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-h-square-fill"},
      [ 
        h(
          "path",
          {"d":"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm9 4.002V12H9.67V8.455H6.33V12H5V4.002h1.33v3.322h3.34V4.002H11Z"}
        ) 
      ]
    )
  }
}