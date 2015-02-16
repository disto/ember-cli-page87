//function formatDate(date, format) {
//    return window.moment(date).format(format);
//}
//export { formatDate
//};
import { format } from 'borrowers-date';

function formatDate(date) {
    return format(date);
}

export {
    formatDate
};
