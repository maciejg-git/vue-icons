import { h } from 'vue'
export default {
  $_icon: {
    name: "FileWaveform",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["file","waveform"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M64 0C28.7 0 0 28.7 0 64V288H112c6.1 0 11.6 3.4 14.3 8.8L144 332.2l49.7-99.4c2.7-5.4 8.2-8.8 14.3-8.8s11.6 3.4 14.3 8.8L249.9 288H320c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-6.1 0-11.6-3.4-14.3-8.8L208 275.8l-49.7 99.4c-2.7 5.4-8.3 8.8-14.3 8.8s-11.6-3.4-14.3-8.8L102.1 320H0V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0z"}
        ) 
      ]
    )
  }
}