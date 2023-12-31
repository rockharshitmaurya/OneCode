import {io} from 'socket.io-client';

export const initsocket= async()=>{
    const options = {
       'force new connection true':true,
       reconnectionAttempt:'Infinity',
       timeout: 10000,
       transports: ['websocket'], 
    }
    return io(process.env.REACT_APP_BACKEND_URL,options)
}