import React, { useState, useCallback } from 'react'

import Logo from '../../sale_page/component/logo'
import NotfoundModal from '../../sale_page/component/NotfoundModal'
import WhiteListBody__right from './WhiteListBody__right'

export default function WhiteListBody(props) {
    const { changeStateWarning } = props
    const [notfound, setNotfound] = useState(false)
    const showModalNotFound = useCallback(() => {
        setNotfound(true)
    })

    return (
        <div className='white-list__body'>
            {
                !notfound ? (
                    <>
                        <Logo />
                        <WhiteListBody__right />
                    </>
                ) : <NotfoundModal />
            }
        </div>
    )
}