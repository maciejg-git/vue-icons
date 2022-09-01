import { h } from 'vue'
export default {
  $_icon: {
    name: "V",
    vendor: "Fa",
    type: ["solid"],
    tags: ["v"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-v"},
      [ 
        h(
          "path",
          {"d":"M381.5 76.33l-160 384C216.6 472.2 204.9 480 192 480s-24.56-7.757-29.53-19.68l-160-384c-6.797-16.31 .9062-35.05 17.22-41.84c16.38-6.859 35.08 .9219 41.84 17.22L192 364.8l130.5-313.1c6.766-16.3 25.47-24.09 41.84-17.22C380.6 41.28 388.3 60.01 381.5 76.33z"}
        ) 
      ]
    )
  }
}