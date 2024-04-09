import './SideBarItem.css';
import { Link } from 'react-router-dom';
const SideBarItem = ({user}) =>{

    return (
        <>
            <Link to={`/users/${user.id}`}>
                {`${user.firstName} ${user.lastName}`}
            </Link>
        </>
    );
};

export default SideBarItem;
