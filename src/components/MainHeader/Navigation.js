import './Navigation.css'

const Navigation = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="/Users">Users</a>
                </li>
                <li>
                    <a href="/Admin">Admin</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;