import { createContext, useContext, useEffect, useReducer, useMemo, useCallback } from "react";
import PropTypes from 'prop-types';

// --- Helper: A safe JSON parser for localStorage ---
const safeJSONParse = (key, fallback) => {
    try {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : fallback;
    } catch (e) {
        console.error(`Error parsing JSON from localStorage key "${key}":`, e);
        return fallback;
    }
};

// --- Action Types ---
const ACTIONS = {
    INITIALIZE_STATE: 'INITIALIZE_STATE',
    SET_ALERTS: 'SET_ALERTS',
    SET_LOADING: 'SET_LOADING',
    SET_ACTIVE_PAGE_LINK: 'SET_ACTIVE_PAGE_LINK',
    SET_WINDOW_DIMENSIONS: 'SET_WINDOW_DIMENSIONS',
};

// --- Initial State and Reducer ---
const initialState = {
    alerts: [],
    loading: false,
    activePageLink: '',
    windowDimensions: {
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    },
};

// The reducer handles all state transitions
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INITIALIZE_STATE:
            return { ...state, ...action.payload };
        case ACTIONS.SET_LOADING:
            return { ...state, loading: action.payload };
        case ACTIONS.SET_ACTIVE_PAGE_LINK:
            localStorage.setItem("SET_ACTIVE_PAGE_LINK", JSON.stringify(action.payload));
            return { ...state, activePageLink: action.payload };
        case ACTIONS.SET_ALERTS:
            localStorage.setItem("ALERTS", JSON.stringify(action.payload));
            return {
                ...state,
                alerts: action.payload,
                showAlertMessages: action.payload.length > 0,
            };
        case ACTIONS.SET_WINDOW_DIMENSIONS:
            return {
                ...state,
                windowDimensions: action.payload,
                isMobileScreenView: action.payload.winWidth < 992,
            };
        default:
            return state;
    }
};

// --- Context Definition ---
const AppContext = createContext(null);
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === null) {
        throw new Error("useAppContext must be used within a GlobalAppContextProvider");
    }
    return context;
};

// --- The Provider Component ---
export const GlobalAppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Effect to initialize state from localStorage on first mount
    useEffect(() => {
        const payload = {
            alerts: safeJSONParse("ALERTS", []),
            activePageLink: safeJSONParse("SET_ACTIVE_PAGE_LINK", 'home')
        };

        dispatch({ type: ACTIONS.INITIALIZE_STATE, payload });
    }, []);

    // Effect for resizing window
    useEffect(() => {
        const handleResize = () => {
            dispatch({
                type: ACTIONS.SET_WINDOW_DIMENSIONS,
                payload: { winWidth: window.innerWidth, winHeight: window.innerHeight },
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // --- Action Creators (Memoized functions to pass to consumers) ---
    const setAlerts = useCallback((alerts) => dispatch({ type: ACTIONS.SET_ALERTS, payload: alerts }), []);
    const setLoading = useCallback((isLoading) => dispatch({ type: ACTIONS.SET_LOADING, payload: isLoading }), []);
    const setActivePageLink = useCallback((updateActivePageLink) => dispatch({ type: ACTIONS.SET_ACTIVE_PAGE_LINK, payload: updateActivePageLink }), []);
    
    
    // Memoize the entire context value to prevent re-renders
    const contextValue = useMemo(() => ({
        ...state,
        setAlerts,
        setLoading,
        setActivePageLink,
    }), [state, setLoading, setAlerts, setActivePageLink]);

    return (
        <AppContext.Provider value={contextValue}> 
            {children}
        </AppContext.Provider>
    );
};

GlobalAppContextProvider.propTypes = {
    children: PropTypes.any,
};

export default GlobalAppContextProvider;