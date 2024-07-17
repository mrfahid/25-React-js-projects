import './Container.css'

const Container = ({ type, children}) => {

    return <div className={`container ${type && `${type}`}`}>{children}</div>;

}

export default Container