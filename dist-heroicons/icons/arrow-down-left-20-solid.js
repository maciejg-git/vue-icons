import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownLeft",
    vendor: "H",
    license: "MIT",
    type: ["20","solid"],
    tags: ["arrow","down","left"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L6.5 12.4393V6.75C6.5 6.33579 6.16421 6 5.75 6C5.33579 6 5 6.33579 5 6.75V14.25C5 14.6642 5.33579 15 5.75 15H13.25C13.6642 15 14 14.6642 14 14.25C14 13.8358 13.6642 13.5 13.25 13.5H7.56066L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}