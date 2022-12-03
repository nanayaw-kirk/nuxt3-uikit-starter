import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
UIkit.container = '#__nuxt'
UIkit.use(Icons)
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('uikit', UIkit)
})