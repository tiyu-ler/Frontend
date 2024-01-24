<template>
  <section>
    <div class="engen_txt">
      <img src="/engen.jpg" class="engen" />
      <div class="centered_txt">
        <h1 class="meet_team_main">About us</h1>
        <p>
          We are committed to creating a favorable and encouraging educational that fosters
          excellence in every aspect.
        </p>
      </div>
    </div>
    <div class="stickers">
      <div class="st">
        <p class="num_st">10</p>
        <p class="txt_st">years of experience</p>
        <div class="line_cf"></div>
      </div>
      <div class="st stm">
        <p class="num_st">2168</p>
        <p class="txt_st">students successfully completed the courses and got a job</p>
        <div class="line_cf"></div>
      </div>
      <div class="st">
        <p class="num_st">26</p>
        <p class="txt_st">companies work with us</p>
        <div class="line_cf"></div>
      </div>
    </div>
    <p class="st_podpis">* As of December 31, 2021</p>
  </section>
  <h1 class="ourlect">Our lecturers</h1>
  <div class="accordion_box">
    <LectureCardComponent
      v-for="lecturer in lecturesArray"
      :key="lecturer.id"
      :name="lecturer.name"
      :slug="lecturer.slug"
      :image="lecturer.image"
      :role="lecturer.role"
      :description="lecturer.description"
      :mail="lecturer.mail"
      :life_path="lecturer.life_path"
    />
  </div>
  <h1 class="ourlect">Our graduates</h1>
  <div class="container">
    <div class="cards">
      <div class="title-card">
        <div class="title-card__background"></div>
        <p style="font-size: 18px; margin-top: 210px">
          Feedback from our students who have successfully completed their education.
        </p>
      </div>
      <div class="cards__list">
        <GraduatesCardComponent
          v-for="graduated in graduatesArray"
          :key="graduated.id"
          :date="graduated.date"
          :occupation="graduated.occupation"
          :story="graduated.story"
          :image="graduated.image"
          :name="graduated.name"
        />
      </div>
    </div>
  </div>
</template>
<script>
import graduates from '@/assets/graduates.json'
import lecturers from '@/assets/lecturers.json'
import LectureCardComponent from '@/components/LectureCardComponent.vue'
import GraduatesCardComponent from '@/components/GraduatesCardComponent.vue'
export default {
  components: { LectureCardComponent,
    GraduatesCardComponent },
  data() {
    return {
      lecturesArray: [],
      graduatesArray: []
    }
  },
  mounted() {
    this.lecturesArray = lecturers.lecturers,
    this.graduatesArray = graduates.graduates
  }
}
</script>
