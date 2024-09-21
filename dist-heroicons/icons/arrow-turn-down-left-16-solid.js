import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTurnDownLeft",
    vendor: "H",
    license: "MIT",
    type: ["16","Solid"],
    tags: ["arrow","turn","down","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 16 16","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M13.25 2a.75.75 0 0 0-.75.75v6.5H4.56l.97-.97a.75.75 0 0 0-1.06-1.06L2.22 9.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h8.69A.75.75 0 0 0 14 10V2.75a.75.75 0 0 0-.75-.75Z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}