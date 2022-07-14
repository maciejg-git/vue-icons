import { h } from 'vue'
export default {
  $_icon: {
    name: "Toggle2On",
    vendor: "B",
    type: "",
    tags: ["toggle2","on"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-toggle2-on"},
      [ 
        h(
          "path",
          {"d":"M7 5H3a3 3 0 0 0 0 6h4a4.995 4.995 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416c.156-.357.352-.692.584-1z"}
        ),
        h(
          "path",
          {"d":"M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0z"}
        ) 
      ]
    )
  }
}