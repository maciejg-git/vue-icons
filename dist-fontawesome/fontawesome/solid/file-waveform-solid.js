import { h } from 'vue'
export default {
  $_icon: {
    name: "FileWaveform",
    vendor: "Fa",
    type: "Solid",
    tags: ["file","waveform"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","class":"v-icon","fill":"currentColor","data-name":"fa-file-waveform","innerHTML":"<path d='M320 0v128h128L320 0zM288 128L288 0H112C85.49 0 64 21.49 64 48V224H16C7.164 224 0 231.2 0 240v32C0 280.8 7.164 288 16 288h128c6.062 0 11.59 3.438 14.31 8.844L176 332.2l49.69-99.38c5.438-10.81 23.19-10.81 28.62 0L281.9 288H352c8.844 0 16 7.156 16 16S360.8 320 352 320h-80c-6.062 0-11.59-3.438-14.31-8.844L240 275.8l-49.69 99.38C187.6 380.6 182.1 384 176 384s-11.59-3.438-14.31-8.844L134.1 320H64v144C64 490.5 85.49 512 112 512h288c26.51 0 48-21.49 48-48V160h-127.1C302.3 160 288 145.7 288 128z'/>"},
    )
  }
}