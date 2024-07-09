import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <ul className="list-unstyled">
                <li>
                    <Link to="Products">Get All Product</Link>
                </li>
                <li>
                    <a href="/#">Get All Categories</a>
                </li>
            </ul>
        </>
    );
}
export default Sidebar;