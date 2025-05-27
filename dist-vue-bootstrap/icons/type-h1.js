import { h } from 'vue'
export default {
  $_icon: {
    name: "TypeH1",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["type","h1"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M7.648 13V3H6.3v4.234H1.348V3H0v10h1.348V8.421H6.3V13zM14 13V3h-1.333l-2.381 1.766V6.12L12.6 4.443h.066V13z"}
        ) 
      ]
    )
  }
}