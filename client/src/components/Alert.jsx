const Alert = ({ errorMessage }) => {
  const errors = errorMessage.split(',')
  return (
    <div className='w-full'>
      {errors.map((error, index) => (
        <p key={index} className='text-red-500'>
          * {error}
        </p>
      ))}
    </div>
  )
}

export default Alert
