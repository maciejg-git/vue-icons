import { h } from 'vue'
export default {
  $_icon: {
    name: "Envelope",
    vendor: "H",
    type: ["24","solid"],
    tags: ["envelope"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-envelope"},
      [ 
        h(
          "path",
          {"d":"M1.5 8.6691V17.25C1.5 18.9069 2.84315 20.25 4.5 20.25H19.5C21.1569 20.25 22.5 18.9069 22.5 17.25V8.6691L13.5723 14.1631C12.6081 14.7564 11.3919 14.7564 10.4277 14.1631L1.5 8.6691Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"d":"M22.5 6.90783V6.75C22.5 5.09315 21.1569 3.75 19.5 3.75H4.5C2.84315 3.75 1.5 5.09315 1.5 6.75V6.90783L11.2139 12.8856C11.696 13.1823 12.304 13.1823 12.7861 12.8856L22.5 6.90783Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}