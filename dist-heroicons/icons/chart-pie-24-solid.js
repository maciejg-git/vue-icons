import { h } from 'vue'
export default {
  $_icon: {
    name: "ChartPie",
    vendor: "H",
    license: "MIT",
    type: ["24","Solid"],
    tags: ["chart","pie"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z","clip-rule":"evenodd"}
        ),
        h(
          "path",
          {"fill-rule":"evenodd","d":"M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}