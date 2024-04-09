import React from 'react'
import ReactLoading from 'react-loading'

export const Loader = () => {
  return (
    <div className='loader d-flex jc-center ai-center'>
        <ReactLoading type={'spin'} height={'60px'} width={'60px'} color='blue'/>
    </div>
  )
}
