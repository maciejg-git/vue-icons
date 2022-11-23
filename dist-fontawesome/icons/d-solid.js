import { h } from 'vue'
export default {
  $_icon: {
    name: "D",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["d"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M0 64C0 46.3 14.3 32 32 32H160c123.7 0 224 100.3 224 224s-100.3 224-224 224H32c-17.7 0-32-14.3-32-32V64zM64 96V416h96c88.4 0 160-71.6 160-160s-71.6-160-160-160H64z"}
        ) 
      ]
    )
  }
}