import { h } from 'vue'
export default {
  $_icon: {
    name: "LockOpen",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["lock","open"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-lock-open"},
      [ 
        h(
          "path",
          {"d":"M352 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H288V144C288 64.47 352.5 0 432 0C511.5 0 576 64.47 576 144V192C576 209.7 561.7 224 544 224C526.3 224 512 209.7 512 192V144C512 99.82 476.2 64 432 64C387.8 64 352 99.82 352 144V192z"}
        ) 
      ]
    )
  }
}