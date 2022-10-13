import React from 'react'
import Section from '../../../../components/pages/section/Section'

const Sections = ({ active, setActive }) => {
    return (
        <div className={'flex py-3'}>
            <Section
                name={'Users List'}
                path={'/admin/users-list'}
                active={active}
                setActive={setActive}
            />
            <Section
                name={'Token'}
                path={'/admin/token'}
                active={active}
                setActive={setActive}
            />
        </div>
    )
}

export default Sections
