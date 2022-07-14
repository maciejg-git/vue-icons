import { h } from 'vue'
export default {
  $_icon: {
    name: "FoodApple",
    vendor: "Mdi",
    type: "",
    tags: ["food","apple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-food-apple"},
      [ 
        h(
          "path",
          {"d":"M20,10C22,13 17,22 15,22C13,22 13,21 12,21C11,21 11,22 9,22C7,22 2,13 4,10C6,7 9,7 11,8V5C5.38,8.07 4.11,3.78 4.11,3.78C4.11,3.78 6.77,0.19 11,5V3H13V8C15,7 18,7 20,10Z"}
        ) 
      ]
    )
  }
}