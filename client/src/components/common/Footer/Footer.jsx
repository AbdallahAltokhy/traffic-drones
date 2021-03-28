import './footer.css';

const Footer = (props) => {
	return (
		<div className="footer-container">
			<div className="footer-content">
				<div className="footer-col-first">
					<div className="footer-logo">
						<i className="fas fa-hamburger"></i>
						<h4>LogoIpsum</h4>
					</div>

					<div className="footer-txt">
						<p className="p-small-first">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>
					</div>
				</div>

				<div className="footer-col-second">
					<div className="footer-services">
						<h4>Services</h4>
						<a className="link" href="#your-link">
							Email Marketing
						</a>
						<a className="link" href="#your-link">
							Campaigns
						</a>
					</div>

					<div className="footer-about">
						<h4>About</h4>
						<a className="link" href="#your-link">
							Our Story
						</a>
						<a className="link" href="#your-link">
							Benefits
						</a>
					</div>

					<div className="footer-social-Media">
						<h4>Follow us</h4>
						<div className="social-media-icon">
							<i className="fab fa-facebook-f "></i>
							<i className="fab fa-twitter "></i>
							<i className="fab fa-instagram"></i>
						</div>
					</div>
				</div>
			</div>

			<div className="copyright">
				<p className="p-small">Copyright © 2021- All rights reserved</p>
			</div>
		</div>
	);
};

export default Footer;
