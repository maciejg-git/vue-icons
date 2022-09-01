import { h } from 'vue'
export default {
  $_icon: {
    name: "ExclamationTriangle",
    vendor: "H",
    type: ["24","outline"],
    tags: ["exclamation","triangle"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-exclamation-triangle"},
      [ 
        h(
          "path",
          {"d":"M11.9998 10.5004V14.2504M2.69653 17.6261C1.83114 19.1261 2.91371 21.0004 4.64544 21.0004H19.3541C21.0858 21.0004 22.1684 19.1261 21.303 17.6261L13.9487 4.87855C13.0828 3.37772 10.9167 3.37772 10.0509 4.87855L2.69653 17.6261ZM11.9998 17.2504H12.0073V17.2579H11.9998V17.2504Z","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}