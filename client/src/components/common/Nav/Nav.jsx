import './nav.css';

const Nav = () => {
	return (
		<nav className="navBar">
			<h1 className="nav-header">
				{window.location.pathname === '/' ? 'Drones List' : 'Drone Report'}
			</h1>
		</nav>
	);
};

export default Nav;
