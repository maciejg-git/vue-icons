import { h } from 'vue'
export default {
  $_icon: {
    name: "Delta",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["delta"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,7.77L18.39,18H5.61L12,7.77M12,4L2,20H22"}
        ) 
      ]
    )
  }
}