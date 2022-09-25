import { h } from 'vue'
export default {
  $_icon: {
    name: "PencilRemove",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["pencil","remove"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-pencil-remove"},
      [ 
        h(
          "path",
          {"d":"M20.7,7C21.1,6.6 21.1,6 20.7,5.6L18.4,3.3C18,2.9 17.4,2.9 17,3.3L15.2,5.1L19,8.9M3,17.2V21H6.8L17.8,9.9L14.1,6.1L3,17.2M3.9,2.4L6,4.5L8.1,2.4L9.5,3.8L7.4,5.9L9.5,8L8.1,9.5L6,7.4L3.9,9.5L2.5,8.1L4.6,6L2.5,3.8L3.9,2.4Z"}
        ) 
      ]
    )
  }
}