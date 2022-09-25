import { h } from 'vue'
export default {
  $_icon: {
    name: "Gem",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["gem"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-gem"},
      [ 
        h(
          "path",
          {"d":"M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"}
        ) 
      ]
    )
  }
}