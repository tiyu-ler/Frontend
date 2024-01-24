<template>
  <div class="call-field">
    <form class="container_rn">
      <h1 class="radiane_txt">Any questions?</h1>

      <label for="txtName"><b class="radiane_form_txt">Name</b></label>
      <input type="name" placeholder="Enter Name" name="name" id="txtName" required />

      <label for="txtEmail"><b class="radiane_form_txt">Email</b></label>
      <input type="email" placeholder="Enter Email" name="email" id="txtEmail" required />

      <label class="cb" for="txtCheckbox">
        I accept the processing of personal data
        <input type="checkbox" id="txtCheckbox" required />
        <span class="checkmark"></span>
      </label>
      <button type="submit" class="btn1" href="thank_you_pg" onclick="checkInputs()">
        Text me back
      </button>
    </form>
  </div>
  <div class="row">
    <div v-for="lecturer in lecturers" :key="lecturer.id" class="emp">
      <div class="card">
        <img :src="`/${lecturer.image}`" alt="Jane" class="emp_pic" />
        <div class="cant">
          <h2 class="lecture-name">{{ lecturer.name }}</h2>
          <p class="tile">{{ lecturer.role }}</p>
          <div class="emp_txt_box">
            <p>{{ lecturer.description }}</p>
          </div>
          <p>{{ lecturer.mail }}</p>
          <router-link to="/AboutUs">
            <button class="but_emp">More information</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import lecturers from '../assets/lecturers.json'
export default {
  data() {
    return {
      lecturers: lecturers.lecturers
    }
  }
}
</script>
