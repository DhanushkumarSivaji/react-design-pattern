import { ProductInfo } from './components/productInfo';
import { UserInfo } from './components/userInfo';

function CustomHooksPattern() {
	return (
		<>
		<UserInfo userId="123" />
		<ProductInfo productId="1234" />
		</>
	);
}

export default CustomHooksPattern;
