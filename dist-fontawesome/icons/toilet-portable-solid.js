import { h } from 'vue'
export default {
  $_icon: {
    name: "ToiletPortable",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["toilet","portable"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M0 32L0 64l320 0 0-32c0-17.7-14.3-32-32-32L32 0C14.3 0 0 14.3 0 32zM24 96L0 96l0 24L0 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8 224 0 0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-368 0-24-24 0L24 96zM256 240l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16z"}
        ) 
      ]
    )
  }
}