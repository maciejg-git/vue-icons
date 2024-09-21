import { h } from 'vue'
export default {
  $_icon: {
    name: "Neuter",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["neuter"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1L160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-130.9z"}
        ) 
      ]
    )
  }
}