import { h } from 'vue'
export default {
  $_icon: {
    name: "Bell",
    vendor: "H",
    license: "MIT",
    type: ["20","solid"],
    tags: ["bell"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-bell"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M9.99997 2C6.68626 2 3.99997 4.68629 3.99997 8C3.99997 9.88663 3.54624 11.6651 2.7426 13.2343C2.63591 13.4426 2.6326 13.6888 2.73365 13.9C2.83469 14.1111 3.02851 14.2629 3.25769 14.3105C4.32537 14.5322 5.41181 14.7023 6.51426 14.818C6.67494 16.602 8.17421 18 10 18C11.8258 18 13.3251 16.602 13.4857 14.818C14.5882 14.7023 15.6746 14.5322 16.7422 14.3105C16.9714 14.2629 17.1652 14.1111 17.2663 13.9C17.3673 13.6888 17.364 13.4426 17.2573 13.2343C16.4537 11.6651 16 9.88663 16 8C16 4.68629 13.3137 2 9.99997 2ZM8.0493 14.9433C8.69477 14.9809 9.34517 15 9.99997 15C10.6548 15 11.3052 14.9809 11.9507 14.9433C11.749 15.8345 10.9522 16.5 10 16.5C9.04777 16.5 8.25097 15.8345 8.0493 14.9433Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}