import { i18n } from '@/i18n'
import axios from 'axios'
import store from "@/store";

const Trans = {
    get defaultLocale(){
        return process.env.VUE_APP_I18N_LOCALE
    },
    get supportedLocale(){
        return process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
    },
    get currentLocale(){
        return i18n.global.locale
    },
    set currentLocale(locale){
        i18n.global.locale = locale
    },
    getUserSupportedLocale(){
        const userPreferredLocale = Trans.getUserLocale()
        if(Trans.isLocaleSupported(userPreferredLocale.locale)){
            return userPreferredLocale.locale
        }
        if(Trans.isLocaleSupported(userPreferredLocale.localeNoISO)){
            return userPreferredLocale.localeNoISO
        }

        return Trans.defaultLocale
    },
    getUserLocale(){
        const locale = window.navigator.userLanguage || window.navigator.language || Trans.defaultLocale
        return {
            locale,
            localeNoISO: locale.split('-')[0]
        }
    },
    changeLocale(locale){
        if(!Trans.isLocaleSupported(locale)) return Promise.reject(
            new Error('Locale not supported')
        )

        if(i18n.global.locale === locale) return Promise.resolve(locale)

        return Trans.loadLocaleFile(locale).then(msgs => {
            i18n.global.setLocaleMessage(locale, msgs.default || msgs)
            return Trans.setI18nLocaleServices(locale)
        })
    },
    isLocaleSupported(locale){
        return Trans.supportedLocale.includes(locale)
    },
    loadLocaleFile(locale){
        return import(`@/locales/${locale}.json`)
    },
    setI18nLocaleServices(locale){
        Trans.currentLocale = locale
        store.dispatch('locale/setCurrentLocale',locale)
        axios.defaults.headers.common['Accept-language'] = locale
        document.querySelector('html').setAttribute('lang', locale)
        return locale
    },
    async routeMiddleware(to, from, next){
        await store.restored
        if(to.query.lang){
            const lang = to.query.lang == 'id' ? 'id': 'en'
            await store.dispatch('locale/setCurrentLocale', lang)
        }else if(!store.getters['locale/getCurrentLocale']){
            await store.dispatch('locale/setCurrentLocale',  Trans.defaultLocale)
        }
        let locale = store.getters['locale/getCurrentLocale']
        if(!Trans.isLocaleSupported(locale)){
            locale = Trans.defaultLocale
        } 
        return Trans.changeLocale(locale).then(() => 
            Trans.validateUser(to, next)
        )
    },
    validateUser(to, next){
        if (to.path == '/logout' && !store.getters['getisLoggedIn']) {
            return next({
              name: 'Login'
            })
        }
        if (to.matched.some(route => route.meta.beforelogin) && store.getters['getisLoggedIn']) {
            return next({
                name: 'UserProfile'
            })
        }
        next()
    },
    i18nRoute(to){
        return {
            ...to,
            params: {locale: Trans.currentLocale, ...to.params}
        }
    }
}
export { Trans }