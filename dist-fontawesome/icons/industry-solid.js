import { h } from 'vue'
export default {
  $_icon: {
    name: "Industry",
    vendor: "Fa",
    type: ["solid"],
    tags: ["industry"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-industry"},
      [ 
        h(
          "path",
          {"d":"M128 32C145.7 32 160 46.33 160 64V215.4L316.6 131C332.6 122.4 352 134 352 152.2V215.4L508.6 131C524.6 122.4 544 134 544 152.2V432C544 458.5 522.5 480 496 480H80C53.49 480 32 458.5 32 432V64C32 46.33 46.33 32 64 32H128z"}
        ) 
      ]
    )
  }
}