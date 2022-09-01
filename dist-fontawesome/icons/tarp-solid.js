import { h } from 'vue'
export default {
  $_icon: {
    name: "Tarp",
    vendor: "Fa",
    type: ["solid"],
    tags: ["tarp"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-tarp"},
      [ 
        h(
          "path",
          {"d":"M576 288H448C430.3 288 416 302.3 416 320V448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512C547.3 64 576 92.65 576 128V288zM96 192C113.7 192 128 177.7 128 160C128 142.3 113.7 128 96 128C78.33 128 64 142.3 64 160C64 177.7 78.33 192 96 192zM448 448V320H576L448 448z"}
        ) 
      ]
    )
  }
}