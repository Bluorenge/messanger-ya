import { IconMap, IconNames } from '../icon-list';

export default function IconComponent({ iconName, props }: { iconName: IconNames; props?: any }) {
    const IconComponent = IconMap[iconName];

    if (!IconComponent) {
        return null;
    }

    return <IconComponent {...props} />;
}
