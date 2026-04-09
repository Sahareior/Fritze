import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const ReusableModal = ({open,onCancel,title,children}) => {

  return (
    <>
      <Modal
        title={title}
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={open}
        onCancel={onCancel}
      >
        {children}
      </Modal>
    </>
  );
};
export default ReusableModal;