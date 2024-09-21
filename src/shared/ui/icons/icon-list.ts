import { RiFileVideoLine, RiFile2Line, RiLockUnlockLine } from 'react-icons/ri';
import { IconType } from 'react-icons/lib';

import YogaMat from './components/YogaMat';
import Blanket from './components/Blanket';
import CircleIcon from './components/CircleIcon';
import Calendar from './components/Calendar';
import PointingArrow from './components/PointingArrow';
import PointingArrowColorful from './components/PointingArrowColorful';
import ArrowStepUp from './components/ArrowStepUp';
import LineChartUp from './components/LineChartUp';

export enum IconNames {
    Video = 'video',
    File = 'file',
    Lock = 'lock',
    Yoga = 'yoga-mat',
    Blanket = 'blanket',
    Circle = 'circle',
    Calendar = 'calendar',
    PointingArrow = 'pointing-arrow',
    PointingArrowColorful = 'pointing-arrow-colorful',
    ArrowStepUp = 'arrow-step-up',
    LineChartUp = 'LineChartUp',
}

export const IconMap: Record<IconNames, IconType> = {
    [IconNames.Video]: RiFileVideoLine,
    [IconNames.File]: RiFile2Line,
    [IconNames.Lock]: RiLockUnlockLine,
    [IconNames.Yoga]: YogaMat,
    [IconNames.Blanket]: Blanket,
    [IconNames.Circle]: CircleIcon,
    [IconNames.Calendar]: Calendar,
    [IconNames.PointingArrow]: PointingArrow,
    [IconNames.PointingArrowColorful]: PointingArrowColorful,
    [IconNames.ArrowStepUp]: ArrowStepUp,
    [IconNames.LineChartUp]: LineChartUp,
};
