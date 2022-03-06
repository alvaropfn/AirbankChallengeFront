<template>
  <div class="main-card">
    <a-typography-title
      >Manage your business finances from one place</a-typography-title
    >
    <p>
      Access your bank accounts, monitor your cash flow in real-time, and
      forecast finances with ease. Spend less time on admin and more time
      focused on what matters – your business.
    </p>
  </div>

  <div class="costumer-card">
    <div class="costumer-texts">
      <a-typography-title :level="2"
        >95% of customers say switching to Airbank is easy</a-typography-title
      >
      <p>Finance management for every business and our costumers are happy</p>
    </div>
  </div>

  <a href="https://joinairbank.com/" target="_blank">Join Airbank</a>
</template>

<script setup lang="ts"></script>

<style>
.main-card {
  max-width: 40em;
  margin-top: 1em;
}

.costumer-card {
  max-width: 40em;
  margin-top: 1em;
}
</style>
