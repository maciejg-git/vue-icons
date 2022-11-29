import { h } from 'vue'
export default {
  $_icon: {
    name: "Swatch",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["swatch"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.5 2C2.67157 2 2 2.67157 2 3.5V15C2 16.6569 3.34315 18 5 18C6.65685 18 8 16.6569 8 15V3.5C8 2.67157 7.32843 2 6.5 2H3.5ZM15.253 8.98957L9.5 14.7426V6.25731L11.0104 4.74693C11.5962 4.16114 12.5459 4.16114 13.1317 4.74693L15.253 6.86825C15.8388 7.45403 15.8388 8.40378 15.253 8.98957ZM8.36395 18H16.5C17.3284 18 18 17.3284 18 16.5V13.5C18 12.6716 17.3284 12 16.5 12H14.364L8.36395 18ZM5 16C5.55228 16 6 15.5523 6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15C4 15.5523 4.44772 16 5 16Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}