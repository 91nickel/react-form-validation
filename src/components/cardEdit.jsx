import React, { useEffect, useState } from 'react'
import TextField from './textField'
import _ from 'lodash'
import { validator } from '../utils/validator'
import formConfig from '../config/formConfig'
import { getInitialData } from '../utils/initialData'

function CardEdit () {
    const [errors, setErrors] = useState({})
    const [data, setData] = useState(getInitialData())

    useEffect(() => {
        validate()
    }, [data])

    const handleChange = ({target}) => {
        setData(prevState => {
            return {...prevState, [target.name]: target.value}
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const isValid = validate()
        if (!isValid) return
        localStorage.data = JSON.stringify(data)
        location = '/'
    }

    const validate = () => {
        const errors = validator(data, formConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    return (
        <form className="mt-3" onSubmit={handleSubmit}>
            <h1>{!!localStorage.data ? 'Редактировать' : 'Создать'}</h1>
            {Object.keys(formConfig).map(key => {
                const conf = {...formConfig[key], value: data[key], error: errors[key]}
                return <TextField key={'tf_' + key} {...conf} onChange={handleChange}/>
            })}
            <button className="btn btn-primary" type="submit" disabled={!isValid}>Сохранить</button>
        </form>
    )
}

export default CardEdit
