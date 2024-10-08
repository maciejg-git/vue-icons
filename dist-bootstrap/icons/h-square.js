import { h } from 'vue'
export default {
  $_icon: {
    name: "HSquare",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["h","square"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M11 4.002V12H9.67V8.455H6.33V12H5V4.002h1.33v3.322h3.34V4.002z"}
        ),
        h(
          "path",
          {"d":"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"}
        ) 
      ]
    )
  }
}