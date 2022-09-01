import { h } from 'vue'
export default {
  $_icon: {
    name: "Genderless",
    vendor: "Fa",
    type: ["solid"],
    tags: ["genderless"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-genderless"},
      [ 
        h(
          "path",
          {"d":"M192 80C94.83 80 16 158.8 16 256c0 97.17 78.83 176 176 176s176-78.83 176-176C368 158.8 289.2 80 192 80zM192 352c-52.95 0-96-43.05-96-96c0-52.95 43.05-96 96-96s96 43.05 96 96C288 308.9 244.1 352 192 352z"}
        ) 
      ]
    )
  }
}