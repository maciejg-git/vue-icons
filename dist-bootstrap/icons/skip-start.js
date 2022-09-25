import { h } from 'vue'
export default {
  $_icon: {
    name: "SkipStart",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["skip","start"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-skip-start"},
      [ 
        h(
          "path",
          {"d":"M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L5 8.752V12a.5.5 0 0 1-1 0V4zm7.5.633L5.696 8l5.804 3.367V4.633z"}
        ) 
      ]
    )
  }
}