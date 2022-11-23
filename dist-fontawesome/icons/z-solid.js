import { h } from 'vue'
export default {
  $_icon: {
    name: "Z",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["z"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M0 64C0 46.3 14.3 32 32 32H352c12.4 0 23.7 7.2 29 18.4s3.6 24.5-4.4 34.1L100.3 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.4 0-23.7-7.2-29-18.4s-3.6-24.5 4.4-34.1L283.7 96H32C14.3 96 0 81.7 0 64z"}
        ) 
      ]
    )
  }
}