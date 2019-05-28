export const createInitialRoute = (history) => {
    const initialRoute = {
        location: history.location,
        action: history.action,
    };
    return initialRoute;
};
