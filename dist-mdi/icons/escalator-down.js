import { h } from 'vue'
export default {
  $_icon: {
    name: "EscalatorDown",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["escalator","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20 8H18.95L6.95 20H4C2.9 20 2 19.11 2 18C2 16.9 2.9 16 4 16H5.29L7 14.29V10C7 9.45 7.45 9 8 9H9C9.55 9 10 9.45 10 10V11.29L17.29 4H20C21.11 4 22 4.89 22 6C22 7.11 21.11 8 20 8M8.5 5C9.33 5 10 5.67 10 6.5C10 7.33 9.33 8 8.5 8C7.67 8 7 7.33 7 6.5C7 5.67 7.67 5 8.5 5M14.83 17.34L20.34 11.83L22.17 13.66L16.66 19.17L18.5 21H13V15.5L14.83 17.34Z"}
        ) 
      ]
    )
  }
}