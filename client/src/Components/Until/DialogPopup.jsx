import { Modal } from 'antd'
import React from 'react'

const DialogPopup = props => {
    const { isModalOpen, handleOk, handleCancel } = props
    return (
        <>
            <Modal
                title="Title"
                open={true}
                onOk={handleOk}
                // confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>aaaa</p>
            </Modal>
        </>
    )
}

export default DialogPopup
