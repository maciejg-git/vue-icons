import { h } from 'vue'
export default {
  $_icon: {
    name: "PhoneLandscape",
    vendor: "B",
    type: [],
    tags: ["phone","landscape"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-phone-landscape"},
      [ 
        h(
          "path",
          {"d":"M1 4.5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-6zm-1 6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v6z"}
        ),
        h(
          "path",
          {"d":"M14 7.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"}
        ) 
      ]
    )
  }
}