// import { useAppContext } from '@/contexts/GlobalAppContextProvider';
import { useAppContext } from '../../../context/GlobalAppContextProvider';
import MessageBox from './MessageBox';


const AlertMessages = () => {

    const { getLanguageCode } = useAppContext();
    const { alerts, showAlertMessages } = useAppContext();

	return (
		<ul className="notification-alert-box" style={{display: showAlertMessages ? 'block' : 'none'}}>
			{
				alerts.map((alert, index) => (
					<MessageBox
						key={index} 
						alert={alert}
					/>
				))
			}
		</ul>
	)
}

export default AlertMessages
