import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLongLeft",
    vendor: "H",
    type: ["24","Solid"],
    tags: ["arrow","long","left"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-arrow-long-left"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.28033 7.71967C7.57322 8.01256 7.57322 8.48744 7.28033 8.78033L4.81066 11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H4.81066L7.28033 15.2197C7.57322 15.5126 7.57322 15.9874 7.28033 16.2803C6.98744 16.5732 6.51256 16.5732 6.21967 16.2803L2.46967 12.5303C2.17678 12.2374 2.17678 11.7626 2.46967 11.4697L6.21967 7.71967C6.51256 7.42678 6.98744 7.42678 7.28033 7.71967Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}