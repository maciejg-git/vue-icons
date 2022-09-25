import { h } from 'vue'
export default {
  $_icon: {
    name: "CursorFill",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["cursor","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-cursor-fill"},
      [ 
        h(
          "path",
          {"d":"M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"}
        ) 
      ]
    )
  }
}