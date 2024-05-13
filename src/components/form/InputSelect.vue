<script setup lang="ts">
//import component
//import function/data
import { type PropType, computed } from 'vue'

//props
const props = defineProps({
  lableText1: {
    type: String,
    required: true
  },
  lableText2: {
    type: String,
    required: false
  },
  modelValue: {
    type: null,
    String,
    Object,
    required: true,
    default: ''
  },
  options: {
    type: Array as PropType<any>,
    required: false,
    default: null
  },
  optionTextFields: {
    type: Array<String>,
    required: false,
    default: null
  },
  optionValueField: {
    type: String,
    required: false,
    default: null
  },
  placeholder: {
    type: String,
    required: false,
    default: 'Durchmesser wählen'
  },
  required: {
    type: Boolean,
    required: false,
    default: false
  },
  readonly: {
    type: Boolean,
    required: false,
    default: false
  }
})

//properties
const emit = defineEmits(['update:modelValue', 'record-created', 'record-changed'])

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
  <div class="selectFormElement">
    <label :class="{ addStar: required }">
      <p>{{ lableText1 }}</p>
      <p>{{ lableText2 }}</p>
    </label>
    <select
      v-model="computedValue"
      :required="required"
      :disabled="readonly"
      @change="$emit('record-changed', computedValue)"
    >
      <option disabled value="">{{ placeholder }}</option>
      <option v-for="option in options" :key="option" :value="option[optionValueField] ?? option">
        {{ option['rope'] }} ---------------------------------------- {{ option['rollers'] }}
      </option>
    </select>
  </div>
</template>

<style scoped>
/************* Desktop style *************/
.selectFormElement {
}

label {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: var(--color-dark-gray);
}

select {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 48px;
  padding: 12px 10px;
  border: solid 1px var(--color-dark-gray);
  border-radius: 5px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url(../../assets/icons/arrow-down.svg) no-repeat;
  background-position: right 15px bottom 50%;
  background-size: 16px;
  cursor: pointer;
}

select:focus-within {
  border-radius: 5px 5px 0 0;
  border: solid 1px var(--color-dark-gray);
}

select:focus-visible {
  outline: 0;
}

.selectRow {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.selectRow > span {
  display: block;
}

/************* MediaQueries *************/
/* grosse Bildschirme */
@media screen and (max-width: 1920px) {
}

/* Bildschirme */
@media screen and (max-width: 1120px) {
}

/* Tabletversion */
@media screen and (max-width: 63em) {
  .selectFormElement {
    width: 100%;
  }
}

/*  Handy */
@media screen and (max-width: 39em) {
  .selectFormElement {
    min-width: unset;
  }
}
</style>
