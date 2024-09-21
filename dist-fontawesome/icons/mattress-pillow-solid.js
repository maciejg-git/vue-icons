import { h } from 'vue'
export default {
  $_icon: {
    name: "MattressPillow",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["mattress","pillow"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M256 64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l192 0 0-384zm32 384l288 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L288 64l0 384zM64 160c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-192z"}
        ) 
      ]
    )
  }
}