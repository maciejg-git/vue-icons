import { h } from 'vue'
export default {
  $_icon: {
    name: "Toggles2",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["toggles2"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"}
        ),
        h(
          "path",
          {"d":"M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"}
        ),
        h(
          "path",
          {"d":"M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"}
        ) 
      ]
    )
  }
}