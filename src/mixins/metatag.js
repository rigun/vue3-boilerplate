import { mapGetters } from 'vuex'
const metatagparams = {
  title: {text: ''},
  description: {text: ''},
  keywords: {text: ''}
}
export default {
    computed: {
      ...mapGetters({
        current_locale: 'locale/getCurrentLocale',
      })
    },
    watch: {
      current_locale(){
        this.setMetaTag()
      }
    },
    data: () => ({
      params: { ...metatagparams },
    }),
    methods: {
      resetMetaTagParams(){
        this.params = metatagparams
      },
      setMetaTag(metaType = 'default'){
        const metatag = {
          title: this.$t(`metatag.${metaType}.title`, this.params.title),
          description: this.$t(`metatag.${metaType}.description`, this.params.description),
          keywords: this.$t(`metatag.${metaType}.keywords`, this.params.keywords),
        }
        this.$store.dispatch('setMetaTag', metatag)
      }
    }
}