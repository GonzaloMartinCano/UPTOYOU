import React from 'react'
import { Alert } from 'react-bootstrap'



function Message({ variant, children }) {

  return <Alert style={{width: '50%'}} variant={variant}>{children}</Alert>
}
Message.defaultProps = {
  variant: 'info',
}
export default Message