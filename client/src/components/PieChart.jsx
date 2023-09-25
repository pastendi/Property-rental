const PieChart = ({ degree, color }) => {
  const pieStyle = `conic-gradient(${color} ${degree}deg, #E4E8EF ${
    360 - degree
  }deg)`

  return (
    <div
      className={`h-full aspect-square rounded-full flex justify-center items-center `}
      style={{ background: pieStyle }}
    >
      <div
        className={`h-[calc(100%-2rem)] aspect-square bg-white rounded-full`}
      ></div>
    </div>
  )
}

export default PieChart
