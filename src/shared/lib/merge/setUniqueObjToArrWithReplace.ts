export const setUniqueObjToArrWithReplace = (comparedValue: string, newObj: object, arr: any[]) => {
    const existingCourseIndex = arr.findIndex((course: any) => course.categoryName === comparedValue);

    if (existingCourseIndex !== -1) {
        return [
            ...arr.slice(0, existingCourseIndex),
            { ...arr[existingCourseIndex], courseList: newObj },
            ...arr.slice(existingCourseIndex + 1),
        ];
    } else {
        return [...arr, { categoryName: comparedValue, courseList: newObj }];
    }
};
