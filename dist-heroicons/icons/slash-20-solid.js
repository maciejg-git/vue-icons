import { h } from 'vue'
export default {
  $_icon: {
    name: "Slash",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["slash"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M12.528 3.047a.75.75 0 0 1 .449.961L8.433 16.504a.75.75 0 1 1-1.41-.512l4.544-12.496a.75.75 0 0 1 .961-.449Z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}