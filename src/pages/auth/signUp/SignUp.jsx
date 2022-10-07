import React from 'react'
import Button from '../../../components/ui/buttons/button/Button'
import { toast } from 'react-toastify'

const SignUp = () => {
    const notify = () => {
        toast.success('🦄 Wow so easy!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        })
        console.log(123)
    }
    return (
        <div>
            <Button
                label={'click me'}
                primary
                onClick={notify}
                shadow={'large'}
            />
        </div>
    )
}

export default SignUp
