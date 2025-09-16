<script setup lang="ts">
//import component
//import function/data
//props & emits
//properties
//computed properties
//methods
//watch functions
//lifecycle hooks
</script>

<template>
  <div>
    <section id="appDescription">
      <h1 style="color: brown">Test - {{ $t('title') }} - Test</h1>
      <p class="introText bold">{{ $t('smalDescription') }}</p>
      <h2>{{ $t('howItWorks') }}</h2>
      <ul>
        <li>
          <p>{{ $t('howItWorks_List1') }}</p>
        </li>
        <li>
          <p>{{ $t('howItWorks_List2') }}</p>
        </li>
        <li>
          <p>{{ $t('howItWorks_List3') }}</p>
        </li>
        <li>
          <p>{{ $t('howItWorks_List4') }}</p>
        </li>
      </ul>
      <p>{{ $t('description') }}<br /><br /></p>
      <p class="bold">{{ $t('selectSentence') }}</p>
    </section>
    <section id="types">
      <RouterLink :to="{ name: 'litzenseile' }" class="typeLinkArea">
        <img src="../assets/images/FATZER_Stabilo_Litzenseil_Web.png" alt="litzenseile" />
        <p>{{ $t('ossShort') }}</p>
      </RouterLink>
      <RouterLink :to="{ name: 'vv-seile' }" class="typeLinkArea">
        <img src="../assets/images/FATZER_Integra_vollverschlossen_Web.png" alt="vv-seile" />
        <p>{{ $t('flcShort') }}</p>
      </RouterLink>
    </section>
    <section id="importantNotes">
      <h2>{{ $t('importantInformation') }}</h2>
      <ul>
        <li>
          <p>{{ $t('importantInformation_List1') }}</p>
        </li>
        <li>
          <p>{{ $t('importantInformation_List2') }}</p>
        </li>
        <li>
          <p>{{ $t('importantInformation_List3') }}</p>
        </li>
      </ul>
    </section>
    <div class="forCaching">
      <img src="../assets/images/FATZER_Stabilo_Litzenseil_Web.png" />
      <img src="../assets/images/FATZER_Integra_vollverschlossen_Web.png" />
      <img src="../assets/icons/arrow-down.svg" />
    </div>
  </div>
</template>

<style scoped>
/************* Desktop style *************/
section {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 100px;
}

#appDescription {
  text-align: center;
}

#appDescription > h1 {
  margin-bottom: 220px;
}

#appDescription > ul {
  padding: 0px 0px 20px 50px;
}

.introText {
  margin-bottom: 20px;
}

h2 {
  text-align: center;
}

ul {
  list-style: disc;
  text-align: left;
}

.forCaching {
  display: none;
}

#types {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.typeLinkArea {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  row-gap: 30px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  transition: transform 0.2s;
}

.typeLinkArea:hover {
  transform: scale(1.1);
}

.typeLinkArea img {
  width: 80%;
}

.typeLinkArea p {
  width: 100%;
  text-transform: uppercase;
}

/************* MediaQueries *************/
/* grosse Bildschirme */
@media screen and (max-width: 1920px) {
}

/* Bildschirme main Bereich + 2x 35px margin */
@media screen and (max-width: 1234px) {
  #appDescription > h1 {
    margin-bottom: 100px;
  }
}

/* Tabletversion */
@media screen and (max-width: 63em) {
  #appDescription > h1 {
    margin-bottom: 20px;
  }
}

/*  Handy */
@media screen and (max-width: 39em) {
  #importantNotes {
    padding-left: 20px;
  }
}
</style>
