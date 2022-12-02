import React from 'react'
import Section from '../../../components/pages/section/Section'

const Sections = ({ active, setActive }) => {
    return (
        <div className={'flex py-3'}>
            <Section
                name={'List'}
                path={'/staff/list'}
                active={active}
                setActive={setActive}
            />
            <Section
                name={'Add'}
                path={'/staff/add'}
                active={active}
                setActive={setActive}
            />
        </div>
    )
}

export default Sections
