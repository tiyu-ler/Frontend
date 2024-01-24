<script>
export default {
  name: 'LectureCardComponent',
  props: {
    name: String,
    role: String,
    life_path: String,
    slug: String,
    image: String,
    description: String,
    mail: String
  }
}
</script>

<template>
  <h2 class="accordion" id="accordion">
    ♦ {{ name }}
    <p class="accordion_add_txt">{{ role }}</p>
  </h2>
  <div class="">
    <p class="panel_txt">{{ life_path }}</p>
  </div>
</template>

<style scoped></style>
