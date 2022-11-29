import { h } from 'vue'
export default {
  $_icon: {
    name: "Tape",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["tape"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M380.8 416c41.5-40.7 67.2-97.3 67.2-160C448 132.3 347.7 32 224 32S0 132.3 0 256S100.3 480 224 480H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H380.8zM224 352c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96zm64-96c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z"}
        ) 
      ]
    )
  }
}