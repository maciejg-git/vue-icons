import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowCollapseDown",
    vendor: "Mdi",
    type: [],
    tags: ["arrow","collapse","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-collapse-down"},
      [ 
        h(
          "path",
          {"d":"M19.92,12.08L12,20L4.08,12.08L5.5,10.67L11,16.17V2H13V16.17L18.5,10.66L19.92,12.08M12,20H2V22H22V20H12Z"}
        ) 
      ]
    )
  }
}