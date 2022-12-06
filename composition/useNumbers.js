import { ref, reactive, computed, watch, watchEffect } from "vue";

export function useNumbers() {
  const c = ref(0)
  const d = ref(0)
  const history  = ref([])
  // Reactive => {} (Object)
  const numbers = reactive({
    a: 1,
    b: 2
  })

  const total = computed(() => numbers.a + numbers.b + c.value + d.value)

  const increase = (index) => {
    numbers[index]++
  }

  watch(numbers, newVal => {
    console.log(`a: ${newVal.a}, b: ${newVal.b}`)
  },{
    immediate: true
  })

  watch([c, d], ([newC, newD],[oldC, oldD]) => {
    if(newC !== oldC)
    history.value.push(`New Value c: ${newC}, Old Value c: ${oldC}`)

    if(newD !== oldD)
    history.value.push(`New Value d: ${newD}, Old Value d: ${oldD}`)
  })

  watchEffect(() => {
    console.log(`From watchEffect a: ${numbers.a}, b: ${numbers.b}`)
  })

  return {
    c,
    d,
    history,
    numbers,
    total,
    increase
  }
}