import { h } from 'vue'
export default {
  $_icon: {
    name: "Bars3BottomRight",
    vendor: "H",
    license: "MIT",
    type: ["20","solid"],
    tags: ["bars","3","bottom","right"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM9 15.25C9 14.8358 9.33579 14.5 9.75 14.5H17.25C17.6642 14.5 18 14.8358 18 15.25C18 15.6642 17.6642 16 17.25 16H9.75C9.33579 16 9 15.6642 9 15.25Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 10C2 9.58579 2.33579 9.25 2.75 9.25H17.25C17.6642 9.25 18 9.58579 18 10C18 10.4142 17.6642 10.75 17.25 10.75H2.75C2.33579 10.75 2 10.4142 2 10Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}