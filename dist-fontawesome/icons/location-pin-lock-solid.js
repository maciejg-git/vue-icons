import { h } from 'vue'
export default {
  $_icon: {
    name: "LocationPinLock",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["location","pin","lock"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M215.7 499.2c11-13.8 25.1-31.7 40.3-52.3V352c0-23.7 12.9-44.4 32-55.4V272c0-55.6 40.5-101.7 93.6-110.5C367 70 287.7 0 192 0C86 0 0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zm208-16c17.7 0 32 14.3 32 32v48H368V272c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32V272c0-44.2-35.8-80-80-80s-80 35.8-80 80z"}
        ) 
      ]
    )
  }
}