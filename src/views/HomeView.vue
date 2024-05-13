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
      <h1>Seilschieber-APP</h1>
      <p class="introText">
        «Seilschieber» ist ein APP, das Ihnen hilft, die technischen Seildaten von Seilbahnseilen zu
        ermitteln. Sie können den Seiltyp und die jeweilige Größe auswählen und bekommen im Gegenzug
        Richtwerte der technischen Seildaten für verschiedene Konstruktionen.
      </p>
      <h2>Seilschieber bietet Ihnen folgende Funktionen:</h2>
      <ul>
        <li><p>Sie können zwischen Litzenseilen und Vollverschlossenen Seilen wählen.</p></li>
        <li><p>Sie können die Seilgröße in Millimetern aus einer Liste auswählen.</p></li>
        <li>
          <p>
            Bei Litzenseilen bekommen folgende Kennwerte: Durchmesser vom Aussendraht, das Gewicht
            pro Meter und die Mindestbruchkraft (kurz MBK).
          </p>
        </li>
        <li>
          <p>
            Sie bekommen das Gewicht pro Meter und die Mindestbruchkraft für Vollverschlossene Seile
            angezeigt.
          </p>
        </li>
      </ul>
      <p>
        «Seilschieber» ist ein nützliches Werkzeug für Monteure, Seilbahnplaner, Betreiber und
        Techniker, die schnell und einfach Richtwerte für die technischen Seildaten von
        Seilbahnseilen abrufen wollen. «Seilschieber» basiert auf den Seiltabellen der Firma FATZER
        und gibt Ihnen Richtwerte, die jedoch nicht verbindlich sind. Für eine genaue Berechnung und
        Dimensionierung der Seile sollten Sie uns immer direkt kontaktieren und die geltenden Normen
        und Vorschriften beachten.<br />
        Wir freuen uns, dass Sie «Seilschieber» nutzen und hoffen, dass Sie mit unserem APP
        zufrieden sind. Wenn Sie Fragen, Anregungen oder Feedback haben, können Sie uns gerne
        kontaktieren. Wir wünschen Ihnen viel Spass und Erfolg mit der «Seilschieber-APP».
      </p>
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
            die effektive Bruchkraft von beschädigten oder verformten Seilen kann weit tiefer liegen
            als deren Mindestbruchkraft
          </p>
        </li>
        <li>
          <p>
            bei Montagearbeiten Sicherheitsfaktor von mindestens 2.5 einhalten.Starke
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
