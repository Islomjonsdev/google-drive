import React from 'react'
import FolderModals from '../modals/folder-modal'

const ModalProvider = () => {
  return (
    <div className='fixed'>
      <FolderModals />
    </div>
  )
}

export default ModalProvider