<template>
  <footer class="bg-slate-800 min-w-80 p-8 header-footer">
    <div class="flex items-center justify-center mb-6">
      <div v-for="social in socialNetworks" :key="social.id">
        <a target="_blank" :href="social.link">
          <img :src="`/${social.image}`" class="w-8 h-8 mx-5" />
        </a>
      </div>
    </div>
    <div class="page_info text-center flex justify-center flex-col items-center">
      <div class="flex flex-row">
        <p class="email-footer">email: radiane@gmail.com</p>
        <p class="phone-footer">phone: +4219506442626</p>
      </div>
      <p class="text-xs text-slate-600 pt-3">
        Radiane is optimized for education and training. Examples may be simplified to enhance
        reading and learning. Tutorials, links and examples are constantly reviewed to avoid errors,
        but we cannot guarantee the complete correctness of all content. By using Radiane, you agree
        to read and accept our terms of use, cookie policy and privacy policy.
      </p>
      <p class="text-xs text-slate-600">
        Copyright 2012-2022 by Refsnes Data. All Rights Reserved.
      </p>
      <img src="/logo_Radiane.png" class="w-10 mt-5" />
    </div>
  </footer>
</template>

<script>
import socialNetworks from '../assets/socialNetworks.json'

export default {
  data() {
    return {
      socialNetworks: socialNetworks.socialNetworks
    }
  }
}
</script>
