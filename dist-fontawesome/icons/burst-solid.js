import { h } from 'vue'
export default {
  $_icon: {
    name: "Burst",
    vendor: "Fa",
    type: ["solid"],
    tags: ["burst"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-burst"},
      [ 
        h(
          "path",
          {"d":"M200.9 116.2L233.2 16.6C236.4 6.706 245.6 .001 256 .001C266.4 .001 275.6 6.706 278.8 16.6L313.3 123.1L383.8 97.45C392.6 94.26 402.4 96.43 408.1 103C415.6 109.6 417.7 119.4 414.6 128.2L388.9 198.7L495.4 233.2C505.3 236.4 512 245.6 512 256C512 266.4 505.3 275.6 495.4 278.8L392.3 312.2L445.2 412.8C450.1 422.1 448.4 433.5 440.1 440.1C433.5 448.4 422.1 450.1 412.8 445.2L312.2 392.3L278.8 495.4C275.6 505.3 266.4 512 256 512C245.6 512 236.4 505.3 233.2 495.4L199.8 392.3L99.17 445.2C89.87 450.1 78.46 448.4 71.03 440.1C63.6 433.5 61.87 422.1 66.76 412.8L119.7 312.2L16.6 278.8C6.705 275.6 .0003 266.4 .0003 256C.0003 245.6 6.705 236.4 16.6 233.2L116.2 200.9L4.208 37.57C-2.33 28.04-1.143 15.2 7.03 7.03C15.2-1.144 28.04-2.33 37.57 4.208L200.9 116.2z"}
        ) 
      ]
    )
  }
}