import { SelectOption } from '../select/types';
import { TimeZoneData } from './types';

export function getTimeZoneOptionList(arr: TimeZoneData[]): SelectOption[] {
    return arr.map((item: TimeZoneData) => ({
        label: `${item.name}, ${item.offset}`,
        value: `${item.id}`,
    }));
}
