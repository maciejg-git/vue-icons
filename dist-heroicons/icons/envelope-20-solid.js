import { h } from 'vue'
export default {
  $_icon: {
    name: "Envelope",
    vendor: "H",
    type: ["20","solid"],
    tags: ["envelope"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-envelope"},
      [ 
        h(
          "path",
          {"d":"M3 4C1.89543 4 1 4.89543 1 6V7.16147L9.44098 11.382C9.79289 11.5579 10.2071 11.5579 10.559 11.382L19 7.16147V6C19 4.89543 18.1046 4 17 4H3Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"d":"M19 8.83853L11.2298 12.7236C10.4556 13.1107 9.54436 13.1107 8.77016 12.7236L1 8.83853V14C1 15.1046 1.89543 16 3 16H17C18.1046 16 19 15.1046 19 14V8.83853Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}