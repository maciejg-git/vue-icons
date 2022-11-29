import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderOpen",
    vendor: "H",
    license: "MIT",
    type: ["24","Solid"],
    tags: ["folder","open"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"d":"M19.9057 9C20.2877 9 20.6549 9.05664 21 9.16156V9C21 7.34315 19.6569 6 18 6H14.1213C13.9224 6 13.7316 5.92098 13.591 5.78033L11.4697 3.65901C11.0477 3.23705 10.4754 3 9.87868 3H6C4.34315 3 3 4.34315 3 6V9.16152C3.34508 9.05663 3.71223 9 4.09421 9H19.9057Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"d":"M4.0943 10.5C2.72506 10.5 1.67327 11.7127 1.86691 13.0682L2.72405 19.0682C2.8824 20.1767 3.83173 21 4.95144 21H19.0486C20.1683 21 21.1176 20.1767 21.276 19.0682L22.1331 13.0682C22.3268 11.7127 21.275 10.5 19.9058 10.5H4.0943Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}