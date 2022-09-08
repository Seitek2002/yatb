import { defineStore } from 'pinia'
import { ref } from 'vue'
import db from 'boot/db'

// TODO: !!STATE!!
export const userStore = defineStore('user', () => {
  const crypt = ref(null)
  /* const raw = async () => {
    const result = await db.get('settings', 'seed')
    return result
  } */
  ;(async () => {
    const r = await db.get('settings', 'seed')
    if (r !== undefined || typeof r !== 'undefined') {
      crypt.value = r
    }
  })()
  // console.log(raw.then(value => { return value }))
  // computed(() => data.value)
  const sk = ref(null)
  const pk = ref('')
  const seed = ref(null)

  return { sk, pk, seed, crypt }
})
