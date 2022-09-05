
import { Button, ButtonVariant, ButtonSize } from "../components/Button/Button";
import { Icon, IconCatalog } from "../components/Icon/Icon";

const Home = () => {
	return (
		<div>
			<Button variant={ButtonVariant.primary} size={ButtonSize.lg}>
				CTA
			</Button>
			<Icon icon={IconCatalog.upload} width="32px" height="32px" />
		</div>
	);
};

export default Home;
