import { h } from 'vue'
export default {
  $_icon: {
    name: "Tent",
    vendor: "Fa",
    type: ["solid"],
    tags: ["tent"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-tent"},
      [ 
        h(
          "path",
          {"d":"M269.4 5.961C280.5-1.987 295.5-1.987 306.6 5.961L530.6 165.1C538 171.2 542.8 179.4 543.8 188.5L575.8 476.5C576.8 485.5 573.9 494.6 567.8 501.3C561.8 508.1 553.1 512 544 512H416L288 288V512H32C22.9 512 14.23 508.1 8.156 501.3C2.086 494.6-.8093 485.5 .1958 476.5L32.2 188.5C33.2 179.4 38 171.2 45.4 165.1L269.4 5.961z"}
        ) 
      ]
    )
  }
}