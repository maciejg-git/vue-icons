import { h } from 'vue'
export default {
  $_icon: {
    name: "ChartBar",
    vendor: "H",
    license: "MIT",
    type: ["20","solid"],
    tags: ["chart","bar"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-chart-bar"},
      [ 
        h(
          "path",
          {"d":"M15.5 2C14.6716 2 14 2.67157 14 3.5V16.5C14 17.3284 14.6716 18 15.5 18H16.5C17.3284 18 18 17.3284 18 16.5V3.5C18 2.67157 17.3284 2 16.5 2H15.5Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"d":"M9.5 6C8.67157 6 8 6.67157 8 7.5V16.5C8 17.3284 8.67157 18 9.5 18H10.5C11.3284 18 12 17.3284 12 16.5V7.5C12 6.67157 11.3284 6 10.5 6H9.5Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"d":"M3.5 10C2.67157 10 2 10.6716 2 11.5V16.5C2 17.3284 2.67157 18 3.5 18H4.5C5.32843 18 6 17.3284 6 16.5V11.5C6 10.6716 5.32843 10 4.5 10H3.5Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}