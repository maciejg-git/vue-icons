import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaHCircleOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","h","circle","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,7H11V11H13V7H15V17H13V13H11V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"}
        ) 
      ]
    )
  }
}