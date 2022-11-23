import { h } from 'vue'
export default {
  $_icon: {
    name: "VariableBox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["variable","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7.4 18C5.9 16.5 5 14.3 5 12S5.9 7.5 7.4 6L9 6.7C7.7 7.9 7 9.9 7 12S7.7 16.1 9 17.3L7.4 18M12.7 15L11.9 13L10.5 15H9L11.3 11.9L10 9H11.3L12.1 11L13.5 9H15L12.8 12L14.1 15H12.7M16.6 18L15 17.3C16.3 16 17 14.1 17 12S16.3 7.9 15 6.7L16.6 6C18.1 7.5 19 9.7 19 12S18.1 16.5 16.6 18Z"}
        ) 
      ]
    )
  }
}