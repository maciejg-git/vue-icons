import { h } from 'vue'
export default {
  $_icon: {
    name: "ChessKing",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["chess","king"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M224 0c17.7 0 32 14.3 32 32V48h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H256v48H416c10.3 0 19.9 4.9 26 13.3s7.7 19.1 4.4 28.8L375.1 416H72.9L1.6 202.1C-1.6 192.4 0 181.6 6 173.3s15.7-13.3 26-13.3H192V112H176c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V32c0-17.7 14.3-32 32-32zM32 480c0-17.7 14.3-32 32-32H83.6 364.4 384c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128 64c-17.7 0-32-14.3-32-32z"}
        ) 
      ]
    )
  }
}