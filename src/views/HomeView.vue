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
      <h1>Seilschieber</h1>
      <p class="introText bold">
        Einfach Richtwerte der technischen Seildaten für verschiedene Konstruktionen berechnen.
      </p>
      <h2>So geht's</h2>
      <ul>
        <li><p>Wählen Sie zwischen Litzenseilen und vollverschlossenen Seilen</p></li>
        <li><p>Bestimmen Sie die Seilgröße in Millimetern</p></li>
        <li>
          <p>
            Bei Litzenseilen werden folgende Kennwerte ausgegeben: Durchmesser vom Aussendraht,
            Gewicht pro Meter und Mindestbruchkraft (kurz MBK)
          </p>
        </li>
        <li>
          <p>
            Bei vollverschlossenen Seilen werden das Gewicht pro Meter und die Mindestbruchkraft
            ausgegeben
          </p>
        </li>
      </ul>
      <p>
        «Seilschieber» basiert auf den Seiltabellen der Firma FATZER. Es handelt sich dabei um
        Richtwerte, die nicht verbindlich sind. Für eine genaue Berechnung und Dimensionierung der
        Seile kontaktieren Sie uns immer direkt und beachten die geltenden Normen und Vorschriften.
        <br /><br />
      </p>
      <p class="bold">Wählen Sie dafür den Seiltyp und die gewünschte Grösse aus.</p>
    </section>
    <section id="types">
      <RouterLink :to="{ name: 'litzenseile' }" class="typeLinkArea">
        <img src="../assets/images/FATZER_Stabilo_Litzenseil_Web.png" alt="litzenseile" />
        <p>LITZENSEILE</p>
      </RouterLink>
      <RouterLink :to="{ name: 'vv-seile' }" class="typeLinkArea">
        <img src="../assets/images/FATZER_Integra_vollverschlossen_Web.png" alt="vv-seile" />
        <p>VV-SEILE</p>
      </RouterLink>
    </section>
    <section id="importantNotes">
      <h2>Wichtige Hinweise</h2>
      <ul>
        <li>
          <p>
            die Mindestbruchkraft bezieht sich immer auf das Seil im Neuzustand und in Abhängigkeit
            der Drahtnennfestigkeit
          </p>
        </li>
        <li>
          <p>
            die effektive Bruchkraft von beschädigten oder verformten Seilen kann tiefer liegen als
            deren Mindestbruchkraft
          </p>
        </li>
        <li>
          <p>
            bei Montagearbeiten Sicherheitsfaktor von mindestens 2.5 einhalten. Starke
            Bruchlastminderung der Mindestbruchkraft durch Kanten, zu kleine Umlenkradien, etc.,
            berücksichtigen
          </p>
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
