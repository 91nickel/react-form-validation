import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { phraseByCount } from '../utils/phraseByCount'
import formConfig from '../config/formConfig'
import { getInitialData } from '../utils/initialData'

function Card () {
    const [data] = useState(getInitialData())

    const userDataFilled = !!localStorage.data

    if (userDataFilled) {
        const age = (new Date).getFullYear() - data.year

        return (
            <div className="row">
                <div className="col-12">
                    <h1>Карточка студента</h1>
                </div>
                <div className="col-12 mt-3">
                    {Object.keys(formConfig).map(key => {
                        const conf = formConfig[key]
                        if (key === 'year') {
                            const ages = (new Date).getFullYear() - +data[key]
                            console.log(ages)
                            return <p key={'p-' + key}>Возраст: <b>{ages + ' ' + phraseByCount(ages)}</b></p>
                        }
                        return <p key={'p-' + key}>{conf.label}: <b>{data[key]}</b></p>
                    })}
                </div>
                <div className="col-12 mt-3">
                    <Link className="btn btn-primary" to="/edit">Редактировать</Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <h1>Карточка студента</h1>
            <p>Нет данных</p>
            <Link className="btn btn-primary mt-3" to="/edit">Добавить</Link>
        </>
    )
}

export default Card
