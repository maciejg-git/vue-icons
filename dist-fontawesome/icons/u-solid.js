import { h } from 'vue'
export default {
  $_icon: {
    name: "U",
    vendor: "Fa",
    type: ["solid"],
    tags: ["u"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-u"},
      [ 
        h(
          "path",
          {"d":"M384 64.01v225.7c0 104.1-86.13 190.3-192 190.3s-192-85.38-192-190.3V64.01C0 46.34 14.33 32.01 32 32.01S64 46.34 64 64.01v225.7c0 69.67 57.42 126.3 128 126.3s128-56.67 128-126.3V64.01c0-17.67 14.33-32 32-32S384 46.34 384 64.01z"}
        ) 
      ]
    )
  }
}