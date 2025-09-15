<script setup lang="ts">
//import component
import InputSelect from '../components/form/InputSelect.vue'

//import function/data
import { computed } from 'vue'

//props & emits
const props = defineProps({
  modelValue: {
    type: Number,
    required: false
  },
  diameterOptions: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

//properties
//computed properties
const computedValue = computed({
  get: () => {
    return props.modelValue
  },
  set: (value) => {
    emit('update:modelValue', value)
  }
})

//methods
//watch functions
//lifecycle hooks
</script>

<template>
  <section id="dataSection">
    <div class="tableTopArea">
      <InputSelect
        :lableText1="$t('ropeDiameter')"
        :lableText2="$t('minRollsDiameter')"
        v-model="computedValue"
        :options="diameterOptions"
        :optionTextFields="['rope', 'rollers']"
        optionValueField="id"
        class="averageInput"
      />
      <!-- Zwischenslot -->
      <slot name="tooltip" />
    </div>
    <div class="table">
      <slot name="table" />
    </div>
  </section>
</template>

<style scoped>
/************* Desktop style *************/
.tableTopArea {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}

.averageInput {
  max-width: 300px;
  width: 100%;
}

.table {
  padding-bottom: 60px;
}

/************* MediaQueries *************/
/* grosse Bildschirme */
@media screen and (max-width: 1920px) {
}

/* Bildschirme main Bereich + 2x 35px margin */
@media screen and (max-width: 1234px) {
}

/* Tabletversion */
@media screen and (max-width: 63em) {
}

/*  Handy */
@media screen and (max-width: 39em) {
  .tableTopArea {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-items: center;
    row-gap: 40px;
    margin-bottom: 30px;
  }

  .averageInput {
    max-width: unset;
    width: 100%;
  }
}
</style>
