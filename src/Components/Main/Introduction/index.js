import Description from './Description';
import { ReactComponent as PhoneIcon } from './Image/phone.svg';
import { Wrapper } from './styled';

const Introduction = () => {
	return (
		<Wrapper>
			<PhoneIcon />
			<Description />
		</Wrapper>
	);
};

export default Introduction;
