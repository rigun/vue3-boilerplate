const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line no-useless-escape
const numberOnlyRegex = /^\d+(\.\d+)?$/ // eslint-disable-line no-useless-escape
const uploaderRegex = /(\.pdf|\.jpg)$/i
const textOnlyRegex = /^[A-Za-z.,\s]+$/
// eslint-disable-next-line no-useless-escape
const phoneReplaceRegex = /([+-\/ ])/g
export {
    emailRegex,
    numberOnlyRegex,
    uploaderRegex,
    textOnlyRegex,
    phoneReplaceRegex
}