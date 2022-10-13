import React, { useEffect, useState } from 'react'
import Section from '../../../components/pages/section/Section'

const Sections = ({ active, setActive }) => {
    return (
        <div className={'flex py-3'}>
            <Section
                name={'Non Working Days'}
                path={'/hr/non-working-days'}
                active={active}
                setActive={setActive}
            />
            <Section
                name={'Duty'}
                path={'/hr/duty'}
                active={active}
                setActive={setActive}
            />
            <Section
                name={'Awards'}
                path={'/hr/awards'}
                active={active}
                setActive={setActive}
            />
        </div>
    )
}

export default Sections
