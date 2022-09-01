import { h } from 'vue'
export default {
  $_icon: {
    name: "FileEarmarkImage",
    vendor: "B",
    type: [],
    tags: ["file","earmark","image"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-file-earmark-image"},
      [ 
        h(
          "path",
          {"d":"M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}
        ),
        h(
          "path",
          {"d":"M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5V14zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4z"}
        ) 
      ]
    )
  }
}