import { h } from 'vue'
export default {
  $_icon: {
    name: "PanDown",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["pan","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M8,17L12,21.5L16,17H8Z"}
        ) 
      ]
    )
  }
}