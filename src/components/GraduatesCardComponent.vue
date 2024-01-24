<script>
export default {
  name: 'GraduatesCardComponent',
  props: {
    date: String,
    occupation: String,
    story: String,
    image: String,
    name: String
  }
}
</script>

<template>
  <div class="cards__item">
          <p>{{ date }}</p>
          <h3>{{ occupation }}</h3>
          <div class="cards__txt">
            <p>{{ story }}</p>
          </div>
          <div class="cards__name">
            <img :src="`/${image}`" class="cards__img" />
            <p>{{ name }}</p>
          </div>
        </div>
</template>

<style scoped></style>
