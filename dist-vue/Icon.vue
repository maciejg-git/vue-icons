<template>
  <component :is="name || icon"></component>
</template>

<script>
export default {
  props: {
    icon: { type: [String, Object], default: "" },
    name: { type: [String, Object], default: "" },
  },
};
</script>
