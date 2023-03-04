import {ImSpinner} from 'react-icons/im'

const Loading = () => {
  return (
    <>
        <ImSpinner className='h-20 w-40 mx-auto animate-spin'/>
        <h3 className='text-xl text-gray-500 mx-auto p-5 text-center'>Loading...</h3>

    </>
  )
}

export default Loading