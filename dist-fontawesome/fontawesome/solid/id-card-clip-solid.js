import { h } from 'vue'
export default {
  $_icon: {
    name: "IdCardClip",
    vendor: "Fa",
    type: "Solid",
    tags: ["id","card","clip"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","class":"v-icon","fill":"currentColor","data-name":"fa-id-card-clip","innerHTML":"<path d='M256 128h64c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256C238.3 0 224 14.33 224 32v64C224 113.7 238.3 128 256 128zM528 64H384v48C384 138.5 362.5 160 336 160h-96C213.5 160 192 138.5 192 112V64H48C21.49 64 0 85.49 0 112v352C0 490.5 21.49 512 48 512h480c26.51 0 48-21.49 48-48v-352C576 85.49 554.5 64 528 64zM288 224c35.35 0 64 28.66 64 64s-28.65 64-64 64s-64-28.66-64-64S252.7 224 288 224zM384 448H192c-8.836 0-16-7.164-16-16C176 405.5 197.5 384 224 384h128c26.51 0 48 21.49 48 48C400 440.8 392.8 448 384 448z'/>"},
    )
  }
}