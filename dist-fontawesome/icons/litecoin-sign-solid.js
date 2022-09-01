import { h } from 'vue'
export default {
  $_icon: {
    name: "LitecoinSign",
    vendor: "Fa",
    type: ["solid"],
    tags: ["litecoin","sign"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-litecoin-sign"},
      [ 
        h(
          "path",
          {"d":"M128 195.3L247.2 161.2C264.2 156.4 281.9 166.2 286.8 183.2C291.6 200.2 281.8 217.9 264.8 222.8L128 261.9V416H352C369.7 416 384 430.3 384 448C384 465.7 369.7 480 352 480H96C78.33 480 64 465.7 64 448V280.1L40.79 286.8C23.8 291.6 6.087 281.8 1.232 264.8C-3.623 247.8 6.216 230.1 23.21 225.2L64 213.6V64C64 46.33 78.33 32 96 32C113.7 32 128 46.33 128 64V195.3z"}
        ) 
      ]
    )
  }
}