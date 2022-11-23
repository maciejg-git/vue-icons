import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowProjectile",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","projectile"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22 2L20 7L19.03 6.03L8 17.06V19L5 22L4 20L2 19L5 16H6.94L17.97 4.97L17 4L22 2Z"}
        ) 
      ]
    )
  }
}