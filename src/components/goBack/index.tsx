import { Locale } from '../configProvider';
import GoBack from './goBack';
import GoBackButton from './goBackButton';

export interface GoBackProps {
    url?: string;
    autoClose?: boolean;
    style?: React.CSSProperties;
    history?: boolean;
}
export interface GoBackButtonProps extends GoBackProps {
    title?: string;
    locale?: Locale['GoBack'];
}

GoBack.GoBackButton = GoBackButton;
export default GoBack;
