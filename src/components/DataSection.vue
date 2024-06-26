<script setup lang="ts">
//import component
import IconItem from '../components/icons/IconItem.vue'
import InputSelect from '../components/form/InputSelect.vue'

//import function/data
import { ref, computed } from 'vue'
import { mdiInformationOutline } from '@mdi/js'

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
const clickOnTooltip = ref(false)

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
function ToggleTooltip() {
  clickOnTooltip.value = !clickOnTooltip.value
}

//watch functions
//lifecycle hooks
</script>

<template>
  <section id="dataSection">
    <div class="tableTopArea">
      <InputSelect
        lableText1="Seil-Ø (mm)"
        lableText2="Min. Rollen-Ø (mm)"
        v-model="computedValue"
        :options="diameterOptions"
        :optionTextFields="['rope', 'rollers']"
        optionValueField="id"
        class="averageInput"
      />
      <div class="infoContainer tooltip" @click="ToggleTooltip">
        <p>Legende</p>
        <IconItem :path="mdiInformationOutline" size="30" />
        <!-- ToDo Use table -->
        <div class="tooltiptext" :class="{ visible: clickOnTooltip }" @click="ToggleTooltip">
          <slot name="tooltip" />
        </div>
      </div>
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

.infoContainer {
  display: flex;
  align-items: center;
  column-gap: 5px;
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

  .tooltip .tooltiptext {
    right: -100px;
  }
}
</style>
