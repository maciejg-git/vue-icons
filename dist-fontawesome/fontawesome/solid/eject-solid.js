import { h } from 'vue'
export default {
  $_icon: {
    name: "Eject",
    vendor: "Fa",
    type: "Solid",
    tags: ["eject"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-eject"},
      [ 
        h(
          "path",
          {"d":"M48.01 319.1h351.1c41.62 0 63.49-49.63 35.37-80.38l-175.1-192.1c-19-20.62-51.75-20.62-70.75 0L12.64 239.6C-15.48 270.2 6.393 319.1 48.01 319.1zM399.1 384H48.01c-26.39 0-47.99 21.59-47.99 47.98C.0117 458.4 21.61 480 48.01 480h351.1c26.39 0 47.99-21.6 47.99-47.99C447.1 405.6 426.4 384 399.1 384z"}
        ) 
      ]
    )
  }
}