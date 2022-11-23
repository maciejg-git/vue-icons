import { h } from 'vue'
export default {
  $_icon: {
    name: "RelationZeroOrManyToMany",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["relation","zero","or","many","to","many"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21 13L19 15H13V7H9.79A2.5 2.5 0 0 0 5.21 7H5L3 5H2V11H3L5 9H5.21A2.5 2.5 0 0 0 9.79 9H11V17H19L21 19H22V13M7.5 9A1 1 0 1 1 8.5 8A1 1 0 0 1 7.5 9Z"}
        ) 
      ]
    )
  }
}