import { useEffect, useState } from "react";
import { useAlert } from "../../../hooks/useAlert";

const MessageBox = ({ alert }) => {

	const [alertParams, setAlertParams] = useState({});
	const { removeAlert } = useAlert();

	const handleRemoveAlertMessageRequest = (e, alert) => {
		e.preventDefault();
		removeAlert(alert);
	};

	useEffect(() => {
		if (alert.code < 200) {
			setAlertParams({
				bgClass: "bg-blue-100",
				borderClass: "border-blue-400",
				textClass: "text-blue-800",
				label: "Information",
			});
		} else if (alert.code >= 200 && alert.code < 300) {
			setAlertParams({
				bgClass: "bg-green-100",
				borderClass: "border-green-400",
				textClass: "text-green-800",
				label: "Success",
			});
		} else if (alert.code >= 300 && alert.code < 400) {
			setAlertParams({
				bgClass: "bg-yellow-100",
				borderClass: "border-yellow-400",
				textClass: "text-yellow-800",
				label: "Warning",
			});
		} else {
			setAlertParams({
				bgClass: "bg-red-50",
				borderClass: "border-red-200",
				textClass: "text-red-800",
				label: "Error",
			});
		}
	}, [alert]);

	return (
		<li className="w-full mb-4">
			<div
				className={`flex items-start justify-between p-4 rounded border ${alertParams.bgClass} ${alertParams.borderClass}`}
			>
				<div className="flex-1">
					<h5 className={`font-semibold mb-1 flex items-center ${alertParams.textClass}`}>
						<i className={`mr-2 text-3xl ${alert.icon}`}></i>
						{alertParams.label}
					</h5>
					<p className={`${alertParams.textClass}`}>{alert.message}</p>
				</div>
				<button
					onClick={(e) => handleRemoveAlertMessageRequest(e, alert)}
					className="ml-4 text-red-400 hover:text-red-900 text-2xl"
				>
					<i className="mdi mdi-close-circle"></i>
				</button>
			</div>
		</li>
	);
};

export default MessageBox;
