import { h } from 'vue'
export default {
  $_icon: {
    name: "Genderless",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["genderless"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M192 368c-61.9 0-112-50.1-112-112s50.1-112 112-112s112 50.1 112 112s-50.1 112-112 112zm0 64c97.2 0 176-78.8 176-176s-78.8-176-176-176S16 158.8 16 256s78.8 176 176 176z"}
        ) 
      ]
    )
  }
}