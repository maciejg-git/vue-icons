import { h } from 'vue'
export default {
  $_icon: {
    name: "Pause",
    vendor: "H",
    type: ["20","solid"],
    tags: ["pause"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-pause"},
      [ 
        h(
          "path",
          {"d":"M5.75 3C5.33579 3 5 3.33579 5 3.75V16.25C5 16.6642 5.33579 17 5.75 17H7.25C7.66421 17 8 16.6642 8 16.25V3.75C8 3.33579 7.66421 3 7.25 3H5.75Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"d":"M12.75 3C12.3358 3 12 3.33579 12 3.75V16.25C12 16.6642 12.3358 17 12.75 17H14.25C14.6642 17 15 16.6642 15 16.25V3.75C15 3.33579 14.6642 3 14.25 3H12.75Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}