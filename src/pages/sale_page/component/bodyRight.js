import React, { useState, useCallback } from 'react'
import Contribute from './contribute/contribute'
import Modal from './Modal'
// import url from '../constant/url'

import wallet from '../../../module/wallet'
import Connector from './Connector'

export default function BodyRight(props) {

    //* Props
    const { onShowNotfound } = props

    //* State
    const [contributeShow, setContributeShow] = useState(false)
    const [modal, setModal] = useState(false)

    //* Function callback
    const onPressShow = useCallback(() => {
        setContributeShow(true)
    }, [])

    const onShowModal = useCallback(() => {
        setModal(true)
    }, [])



    return (
        <React.Fragment>
            {
                !contributeShow
                    ?
                    <Connector
                        showContributeForm={() => {
                            onPressShow()
                        }}
                        showModalFailed={() => {
                            onShowModal()
                        }}
                    ></Connector>
                    :
                    <Contribute onShowModal={onShowModal} />
            }
            {
                modal
                    ?
                    <Modal />
                    :
                    <></>
            }
        </React.Fragment>
    )
}
