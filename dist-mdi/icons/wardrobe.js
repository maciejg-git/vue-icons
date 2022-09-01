import { h } from 'vue'
export default {
  $_icon: {
    name: "Wardrobe",
    vendor: "Mdi",
    type: [],
    tags: ["wardrobe"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-wardrobe"},
      [ 
        h(
          "path",
          {"d":"M4 4V19C4 20.1 4.9 21 6 21V22H8V21H11.5V2H6C4.9 2 4 2.9 4 4M8 10H10V13H8V10M18 2H12.5V21H16V22H18V21C19.1 21 20 20.1 20 19V4C20 2.9 19.1 2 18 2M16 13H14V10H16V13Z"}
        ) 
      ]
    )
  }
}