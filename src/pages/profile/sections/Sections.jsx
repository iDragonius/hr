import React from 'react'
import Section from '../../../components/pages/section/Section'

const Sections = ({ active, setActive }) => {
    return (
        <div className={'flex py-3'}>
            <Section
                name={'Main Info'}
                path={'/profile/main-info'}
                active={active}
                setActive={setActive}
            />
            <Section
                name={'Change Password'}
                path={'/profile/change-password'}
                active={active}
                setActive={setActive}
            />
        </div>
    )
}

export default Sections
