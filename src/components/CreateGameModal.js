import React from 'react';
import FileUploaderComp from '../utils/fileUploader';
import ReactModal from 'react-modal';

function CreateGameModal(props) {
  return (
    <ReactModal isOpen={props.isOpen} style={{ overlay: {}, content: {} }}>
      <FileUploaderComp />
    </ReactModal>
  )
}

export default CreateGameModal;