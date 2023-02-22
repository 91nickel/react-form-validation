export default {
    name: {
        label: 'Имя',
        type: 'text',
        name: 'name',
        validatorConfig: {
            isRequired: {
                message: 'Имя обязательно для заполнения'
            },
        },
    },
    last_name: {
        label: 'Фамилия',
        type: 'text',
        name: 'last_name',
        validatorConfig: {
            isRequired: {
                message: 'Фамилия обязательна для заполнения'
            },
        },
    },
    // email: {
    //     label: 'Email',
    //     type: 'text',
    //     name: 'email',
    //     validatorConfig: {
    //         isRequired: {
    //             message: 'Email обязателен для заполнения'
    //         },
    //         isEmail: {
    //             message: 'Неверный формат email'
    //         },
    //     },
    // },
    url: {
        label: 'Ссылка',
        type: 'text',
        name: 'url',
        validatorConfig: {
            isRequired: {
                message: 'Профиль обязателен для заполнения'
            },
            url: {
                message: 'Необходимо вставить ссылку на профиль'
            },
        },
    },
    year: {
        label: 'Год рождения',
        type: 'text',
        name: 'year',
        validatorConfig: {
            isRequired: {
                message: 'Год рождения обязателен для заполнения'
            },
            minLength: {
                message: 'Укажите год рождения в полном формате',
                value: 4
            },
            max: {
                message: 'Год рождения не может быть больше текущего (#value#)',
                value: +(new Date).getFullYear()
            },
        },
    },
}
