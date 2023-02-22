import formConfig from '../config/formConfig'
import _ from 'lodash'

export function getInitialData () {
    return !!localStorage.data
        ? JSON.parse(localStorage.data)
        : _.zipObject(Object.keys(formConfig), Object.keys(formConfig).fill(''))
}