import './FindMore.css'

const FindMore = ({ text }) => {
  return (
    <button className="findMore">
      <div className="text">{text}</div>
      <i className="fas fa-arrow-right"></i>
    </button>
  )
}

export default FindMore