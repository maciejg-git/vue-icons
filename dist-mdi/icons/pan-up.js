import { h } from 'vue'
export default {
  $_icon: {
    name: "PanUp",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["pan","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,2.5L8,7H16L12,2.5M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"}
        ) 
      ]
    )
  }
}