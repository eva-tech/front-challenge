import { Button, ButtonVariant, ButtonSize } from "./components/Button/Button";
import { Icon, IconCatalog } from "./components/Icon/Icon";

import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Button variant={ButtonVariant.primary} size={ButtonSize.lg}>
				CTA
			</Button>
			<Icon icon={IconCatalog.upload} width="32px" height="32px" />
		</div>
	);
};

export default App;
