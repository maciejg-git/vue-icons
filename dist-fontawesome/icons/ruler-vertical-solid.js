import { h } from 'vue'
export default {
  $_icon: {
    name: "RulerVertical",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["ruler","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M0 48C0 21.5 21.5 0 48 0L208 0c26.5 0 48 21.5 48 48l0 48-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 64-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 64-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 64-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 48z"}
        ) 
      ]
    )
  }
}