import { WithPrintProps } from './hoc/withPrintProps';
import { UserInfo } from './components/userInfo';
import { withUser } from './hoc/withUser';
import { UserInfoForm } from './components/userInfoForm';

const UserInfoWithLoader = withUser(UserInfo, '234');

function HocPattern() {
	return (
		<UserInfoForm />
	);
}

export default HocPattern;
