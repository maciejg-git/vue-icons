import { h } from 'vue'
export default {
  $_icon: {
    name: "BookmarkOff",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bookmark","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20,20.72L18.73,22L16.78,20.05L12,18L5,21V8.27L2,5.27L3.28,4L20,20.72M19,17.16V5C19,3.89 18.1,3 17,3H7C6.41,3 5.89,3.27 5.5,3.68L19,17.16Z"}
        ) 
      ]
    )
  }
}