import { useEffect } from "react"


const Alert = ({ type, msg, removeAlert, list}) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert()
    }, 3 * 1000)

    return () => clearTimeout(timeOut)
  }, [list])
  
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert