import { h } from 'vue'
export default {
  name: "PencilRuler",
  vendor: "Mdi",
  type: "",
  tags: ["pencil","ruler"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-pencil-ruler","innerHTML":"<path d='M3 17.25V21H6.75L17.81 9.93L14.06 6.18L3 17.25M22.61 18.36L18.36 22.61L13.16 17.41L14.93 15.64L15.93 16.64L18.4 14.16L19.82 15.58L18.36 17L19.42 18L20.84 16.6L22.61 18.36M6.61 10.83L1.39 5.64L5.64 1.39L7.4 3.16L4.93 5.64L6 6.7L8.46 4.22L9.88 5.64L8.46 7.05L9.46 8.05L6.61 10.83M20.71 7C21.1 6.61 21.1 6 20.71 5.59L18.37 3.29C18 2.9 17.35 2.9 16.96 3.29L15.12 5.12L18.87 8.87L20.71 7Z' />"},
    )
  }
}