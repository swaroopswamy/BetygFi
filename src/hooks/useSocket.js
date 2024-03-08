
import { getAuthenticatedUserToken } from '@util/utility';
import { useEffect, useMemo } from 'react';


const useSocket = (url, onMessage) => {
    // Memoize the WebSocket instance

    const socket = useMemo(() => {
        if (url) {
            const authenticatedToken = getAuthenticatedUserToken();
            const socketUrl = authenticatedToken ? `${url}?token=${authenticatedToken}` : url;
            return new WebSocket(socketUrl);
        }
    }, [url]);

    useEffect(() => {
        // Event listener for when the connection is open
        const handleOpen = (/* event */) => {
            //   dispatch(setSocketReducer(socket));
            //console.log('WebSocket connection established.');
        };

        // Event listener for incoming messages
        const handleMessage = (event) => {
            if (onMessage) {
                onMessage(event.data);
            }
        };

        // Event listener for when the connection is closed
        const handleClose = (/* event */) => {
            // dispatch(setSocketReducer(null));
            //console.log('WebSocket connection closed.');
        };

        // Event listener for errors
        const handleError = (event) => {
            console.error('WebSocket error:', event);
        };

        // Attach event listeners to the WebSocket instance
        socket.addEventListener('open', handleOpen);
        socket.addEventListener('message', handleMessage);
        socket.addEventListener('close', handleClose);
        socket.addEventListener('error', handleError);

        // Clean up the event listeners when the component unmounts
        return () => {
            socket.removeEventListener('open', handleOpen);
            socket.removeEventListener('message', handleMessage);
            socket.removeEventListener('close', handleClose);
            socket.removeEventListener('error', handleError);

            // Close the WebSocket connection
            //socket.close();
        };

    }, [socket, onMessage]);

    // Function to send a message to the server
    const sendMessage = (message) => {
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(message);
        } else {
            console.error('WebSocket connection not open.');
        }
    };

    return { sendMessage, socket };
};

export default useSocket;
