import { h } from 'vue'
export default {
  $_icon: {
    name: "Campground",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["campground"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-campground"},
      [ 
        h(
          "path",
          {"d":"M328.1 112L563.7 405.4C571.7 415.4 576 427.7 576 440.4V464C576 490.5 554.5 512 528 512H48C21.49 512 0 490.5 0 464V440.4C0 427.7 4.328 415.4 12.27 405.4L247 112L199 51.99C187.1 38.19 190.2 18.05 204 7.013C217.8-4.027 237.9-1.789 248.1 12.01L288 60.78L327 12.01C338.1-1.789 358.2-4.027 371.1 7.013C385.8 18.05 388 38.19 376.1 51.99L328.1 112zM407.5 448L288 291.7L168.5 448H407.5z"}
        ) 
      ]
    )
  }
}