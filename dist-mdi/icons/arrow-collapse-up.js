import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowCollapseUp",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","collapse","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4.08,11.92L12,4L19.92,11.92L18.5,13.33L13,7.83V22H11V7.83L5.5,13.33L4.08,11.92M12,4H22V2H2V4H12Z"}
        ) 
      ]
    )
  }
}