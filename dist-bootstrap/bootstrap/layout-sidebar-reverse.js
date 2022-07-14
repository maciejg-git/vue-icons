import { h } from 'vue'
export default {
  $_icon: {
    name: "LayoutSidebarReverse",
    vendor: "B",
    type: "",
    tags: ["layout","sidebar","reverse"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-layout-sidebar-reverse"},
      [ 
        h(
          "path",
          {"d":"M16 3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3zm-5-1v12H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9zm1 0h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2V2z"}
        ) 
      ]
    )
  }
}