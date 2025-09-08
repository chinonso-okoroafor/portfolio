import { useState } from 'react';
import { useHelpers } from './useHelpers'
import { useAppContext } from '../context/GlobalAppContextProvider';


export const useAlert = () => {
    const { SUCCESS_CODE, SUCCESS_ICON, ERROR_CODE, ERROR_ICON, INFO_CODE, INFO_ICON, WARNING_CODE, WARNING_ICON, uuid } = useHelpers();
    const { alerts, setAlerts } = useAppContext();
    
    const createAlert = (alert) => {
        const alertsUpdate = [alert, ...alerts]
        setAlerts(alertsUpdate)

        setTimeout(() => {
            removeAlert(alert)
        }, 5000)
    }

    const removeAlert = (alertToRemove) => {
        const newAlerts = alerts.filter(alert => alert.id !== alertToRemove.id);
        setAlerts(newAlerts);
    }

    const generateErrorMessage = (message) => {
        return {
            id: uuid(),
            code: ERROR_CODE,
            icon: ERROR_ICON,
            message: message
        }
    }

    const generateSuccessMessage = (message) => {
        return {
            id: uuid(),
            code: SUCCESS_CODE,
            icon: SUCCESS_ICON,
            message: message
        }
    }

    const generateInformationMessage = (message) => {
        return {
            id: uuid(),
            code: INFO_CODE,
            icon: INFO_ICON,
            message: message
        }
    }

    const generateWarningMessage = (message) => {
        return {
            id: uuid(),
            code: WARNING_CODE,
            icon: WARNING_ICON,
            message: message
        }
    }

    return {
        createAlert,
        removeAlert,
        generateErrorMessage,
        generateSuccessMessage,
        generateInformationMessage,
        generateWarningMessage
    }
}