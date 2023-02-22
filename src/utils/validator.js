/* eslint-disable */
export function validator (data, config) {
    const errors = {}

    function validate (validateMethod, data, config) {
        // console.log('validate', validateMethod, data, config)
        let statusValidate
        switch (validateMethod) {
            case 'isRequired':
                statusValidate = data.trim() === ''
                break
            case 'isEmail':
                statusValidate = !/^\S+@\S+\.\S+$/.test(data)
                break
            case 'isCapitalSymbol':
                statusValidate = !/[A-Z]+/.test(data)
                break
            case 'isContainDigit':
                statusValidate = !/\d+/.test(data)
                break
            case 'min':
                statusValidate = +data < +config.value
                config.message = config.message.replace('#value#', config.value)
                break
            case 'max':
                statusValidate = +data > +config.value
                config.message = config.message.replace('#value#', config.value)
                break
            case 'minLength':
                statusValidate = data.length < +config.value
                config.message = config.message.replace('#value#', config.value)
                break
            case 'maxLength':
                statusValidate = data.length > +config.value
                config.message = config.message.replace('#value#', config.value)
                break
            case 'url':
                statusValidate = !/^http(s)?:\/\/\S+\.\S+/.test(data)
                break
            default:
                break
        }
        if (statusValidate)
            return config.message
    }

    for (const fieldName in data) {
        for (const validateMethod in config[fieldName].validatorConfig) {
            const error = validate(validateMethod, data[fieldName], config[fieldName].validatorConfig[validateMethod])
            if (error && !errors[fieldName])
                errors[fieldName] = error
        }
    }

    return errors
}
