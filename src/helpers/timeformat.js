import moment from 'moment'
import { Trans } from './translation'
 
const startDay = (month, year) => {
    return moment(`${year}-${month}`, 'YYYY-MM').startOf('month').day();
}
const endDate = (month,year) => {
    return moment(`${year}-${month}`, 'YYYY-MM').endOf('month').format('DD')
}
const timeFormat = (value) => {
    if (value) { return value.replace(/:[^:]*$/, '') }
}
const currentDate = () => {
    return moment().format('YYYY-MM-DD')
}
const addMonth = (month,year, add) => {
    return moment(`${year}-${month}`, 'YYYY-MM').add(add,'M').format('YYYY-MM')
}
const isPassedDate = (date, month, year) => {
    return moment(`${year}-${month}-${date}`, 'YYYY-MM-DD').format('YYYY-MM-DD') < currentDate()
}
const generateDate = (date,month,year) => {
    const selMonth = month || currentDate().split('-')[1]
    const selYear = year || currentDate().split('-')[0]
    return `${selYear}-${selMonth.toString().padStart(2,'0')}-${date.toString().padStart(2,'0')}`
}

const diffDateTime = (begin,end) =>{
    const dateBegin = moment(begin); 
    const dateEnd = moment(end);
    return dateEnd.diff(dateBegin, 'minutes')
}
const fullMonth = (value) => {
    moment.locale(Trans.currentLocale)
    return moment(value).format('DD MMMM YYYY')
}
export {
    timeFormat,
    startDay,
    endDate,
    currentDate,
    addMonth,
    isPassedDate,
    generateDate,
    diffDateTime,
    fullMonth
}