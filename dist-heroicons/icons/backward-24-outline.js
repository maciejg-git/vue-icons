import { h } from 'vue'
export default {
  $_icon: {
    name: "Backward",
    vendor: "H",
    license: "MIT",
    type: ["24","outline"],
    tags: ["backward"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-backward"},
      [ 
        h(
          "path",
          {"d":"M21 16.811C21 17.6748 20.0668 18.2164 19.3168 17.7878L12.2094 13.7264C11.4536 13.2945 11.4536 12.2047 12.2094 11.7728L19.3168 7.71141C20.0668 7.28285 21 7.82439 21 8.68819V16.811Z","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ),
        h(
          "path",
          {"d":"M11.25 16.811C11.25 17.6748 10.3168 18.2164 9.56684 17.7878L2.45935 13.7264C1.70356 13.2945 1.70356 12.2047 2.45935 11.7728L9.56684 7.71141C10.3168 7.28285 11.25 7.82439 11.25 8.68819L11.25 16.811Z","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}