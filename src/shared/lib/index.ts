export * as validation from './validation/validation';

export { mergeArr } from './merge/mergeArr';
export { setUniqueObjToArrWithReplace } from './merge/setUniqueObjToArrWithReplace';

export { formatTimeToMinAndSec } from './format/time/formatTimeToMinAndSec';
export { formatTimeToHourMinSec } from './format/time/formatTimeToHourMinSec';
export { getRemainingSecondsInCurrentHour } from './format/time/getRemainingSecondsInCurrentHour';
export { checkPassedHours } from './format/time/checkPassedHours';
export { getRemainingTimeInSeconds } from './format/time/getRemainingTimeInSeconds';

export { getFormattedDate, type FormatData } from './format/date/getFormattedDate';
export { getNextMonthFromTodayDate } from './format/date/getNextMonthFromTodayDate';

export { getHostFromHeaders } from './format/host/get-host';
export { getBrand } from './format/brand/get-brand';
export { getDiscountPrice } from './format/price/get-discount-price';
export { capitalizeFirstLetter } from './format/string/capitalize-first-letter';

export { fetchDataCb } from './api/fetch-data-cb';
export { default as fetchData } from './api/fetch-data';
export { FETCH_FETCH_METHODS as FETCH_METHODS } from './api/types';

export { isElementPartiallyVisible } from './el-visible/is-el-part-visible';

export { default as useVisibleEl } from './hooks/useVisibleEl';
export { default as useIsClient } from './hooks/useIsClient';

export { default as useTimeDuration } from './time/useTimeDuration';

export { generateUUID } from './id/generateUUID';

export { isInAppBrowser } from './check-browser/isInAppBrowser';

export { getLocalStorageItem } from './local-storage/getItem';
export { default as consoleLogger } from './logs/consoleLogger';
export { dispatchBrowserEvent } from './events/dispatchBrowserEvent';

export { getNextDay } from './date/getNextDay';

export { isHostInList } from './domain/isHostInList';
export { formatDateObjToFullDate } from './format/time/formatDateObjToFullDate';
