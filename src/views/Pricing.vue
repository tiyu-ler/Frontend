<template>
  <div class="engen_txt">
    <img src="/pricing.jpg" class="engen" />
    <div class="centered_txt">
      <h1 class="meet_team_main">Pricing</h1>
      <p>Here you can pick a plan that works for you.</p>
    </div>
  </div>
  <div class="pr-box">
    <p class="pr-podpis">
      You can pick a plan that works for you. As a result, it will contribute to the best learning
      experience. No credit cards needed during the registration process.
    </p>
  </div>
  <div class="table-price">
    <table>
      <thead>
        <tr>
          <th class="curriculum benefits"></th>
          <th class="curriculum">price</th>
          <th class="curriculum">lessons with teachers</th>
          <th class="curriculum">lesson materials</th>
          <th class="curriculum">homework assignments</th>
          <th class="curriculum">access to the training platform</th>
          <th class="curriculum">certificate of graduation</th>
          <th class="curriculum">communication with teachers off lessons</th>
          <th class="curriculum">guaranteed employment</th>
        </tr>
      </thead>
      <PricingTableComponent
        v-for="price in myArray"
        :key="price.id"
        :price="price.price"
        :name="price.name"
        :lessons="price.lessons"
        :materials="price.materials"
        :homework="price.homework"
        :platform="price.platform"
        :certificate="price.certificate"
        :communication="price.communication"
        :employment="price.employment"
      />
    </table>
  </div>
  <div class="buy-field">
    <form class="buy-form">
      <h1 class="radiane_txt">Radiane</h1>

      <label for="txtName"
        ><b class="radiane_form_txt">Name <small>*</small></b></label
      >
      <input type="name" placeholder="Enter Name" name="name" id="txtName" required />

      <label for="txtEmail"
        ><b class="radiane_form_txt">Email <small>*</small></b></label
      >
      <input type="email" placeholder="Enter Email" name="email" id="txtEmail" required />

      <label for="course"
        ><b class="radiane_form_txt">Course <small>*</small></b></label
      ><br />
      <select name="course" id="course" required>
        <option value="1" class="dropdown">online</option>
        <option value="2" class="dropdown">online+</option>
        <option value="3" class="dropdown">offline</option>
        <option value="4" class="dropdown">offline+</option></select
      ><br />
      <label for="Additional"><b class="radiane_form_txt">Additional (optional)</b></label>
      <textarea
        name="textarea"
        rows="2"
        cols="90"
        id="Additional"
        placeholder="Add additional information as desired "
      ></textarea>

      <label class="cb" for="txtCheckbox"
        >I accept the processing of personal data <small>*</small>
        <input type="checkbox" id="txtCheckbox" required />
        <span class="checkmark"></span>
      </label>
      <button type="submit" class="btn1" href="thank_you_pg">
        Sign up for the course
      </button>
    </form>
  </div>
</template>
<script>
import lecturers from '@/assets/lecturers.json'
import PricingTableComponent from '@/components/PricingTableComponent.vue'
import prices from '@/assets/courses.json'
export default {
  components: { PricingTableComponent },
  data() {
    return {
      lecturers: lecturers.lecturers,
      myArray: []
    }
  },
  mounted() {
    this.myArray = prices.courses
  }
}
</script>
