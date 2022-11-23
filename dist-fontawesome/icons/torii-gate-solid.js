import { h } from 'vue'
export default {
  $_icon: {
    name: "ToriiGate",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["torii","gate"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M0 80c0 26.5 21.5 48 48 48H64v64h64V128h96v64h64V128h96v64h64V128h16c26.5 0 48-21.5 48-48V0L440.6 23.8C424.3 29.2 407.2 32 390 32H122c-17.2 0-34.3-2.8-50.6-8.2L0 0V80zM64 288V480c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384V480c0 17.7 14.3 32 32 32s32-14.3 32-32V288h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64z"}
        ) 
      ]
    )
  }
}