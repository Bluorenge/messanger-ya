export const name = {
    required: 'This is required',
    pattern: {
        value: /^[A-ZА-ЯЁ](.*)$/,
        message: 'First letter must be uppercase',
    },
    validate: (val: string) => /^[A-ZА-ЯЁa-zа-яё-]+$/.test(val) || 'Only latin and hyphen.',
};

export const email = {
    required: 'This is required',
    pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Incorrect email',
    },
};

export const login = {
    required: 'This is required',
    min: {
        value: 3,
        message: 'Min length must be 3 characters',
    },
    max: {
        value: 20,
        message: 'Max length must be 20 characters',
    },
    validate: {
        notOnlyNum: (val: string) => !/^\d+$/.test(val) || 'Login must not contain only numbers',
        validChar: (val: string) => /^[A-Za-z0-9_-]+$/.test(val) || 'Valid characters: Latin, numbers, _ and -',
    },
};

export const phone = {
    required: 'This is required',
    validate: {
        onlyNum: (val: string) =>
            /^\+?[0-9]+$/.test(val) || 'The phone must contain only numbers (a plus at the beginning is possible)',
        lengthCheck: (val: string) => {
            if (val.length < 8) {
                return 'Min length must be 8 characters';
            }
            if (val.length > 15) {
                return 'Max length must be 15 characters';
            }
            return true;
        },
    },
};

export const password = {
    required: 'This is required',
    min: {
        value: 8,
        message: 'Min length must be 8 characters',
    },
    max: {
        value: 40,
        message: 'Max length must be 40 characters',
    },
    validate: {
        notOnlyNum: (val: string) => !/^\d+$/.test(val) || 'Password must not contain only numbers',
        validChar: (val: string) =>
            (/[A-Z]/.test(val) && /[0-9]/.test(val)) ||
            'The password must contain at least one uppercase letter and a number',
    },
};

export const confirmPassword = (watchVal: string) => ({
    validate: (val: string) => {
        if (watchVal !== val) {
            return 'Your passwords do no match';
        }
    },
});
