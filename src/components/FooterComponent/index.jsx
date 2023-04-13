import { Footer } from "flowbite-react";
import {
	BsFacebook,
	BsInstagram,
	BsTwitter,
	BsGithub,
	BsDribbble,
} from "react-icons/bs";

export const FooterComponent = () => {
	return (
		<Footer container={true}>
			<div className="w-full sm:flex sm:items-center sm:justify-between">
				<Footer.Copyright href="#" by="ETMCorp™" year={2023} />
				<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
					<Footer.Icon href="#" icon={BsFacebook} />
					<Footer.Icon href="#" icon={BsInstagram} />
					<Footer.Icon href="#" icon={BsTwitter} />
					<Footer.Icon href="#" icon={BsGithub} />
					<Footer.Icon href="#" icon={BsDribbble} />
				</div>
			</div>
		</Footer>
	);
};
