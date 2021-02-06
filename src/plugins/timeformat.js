import moment from 'moment'

const diffDateTime = (begin,end) =>{
    const dateBegin = moment(begin); 
    const dateEnd = moment(end);
    return dateEnd.diff(dateBegin, 'minutes')
}

export {
    diffDateTime
}