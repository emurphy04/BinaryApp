import { Link } from "react-router-dom"

function Header(){
    return(
        <>
            <div className="headerBox">
                <div className="linkBox">
                    <Link to={'/'}>
                        <h3>Home</h3>
                    </Link>
                </div>
                <div className="linkBox">
                    <Link to={'/previous-trees'}>
                        <h3>Previous Trees</h3>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Header