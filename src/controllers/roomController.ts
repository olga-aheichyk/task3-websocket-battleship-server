import  WebSocket, { WebSocketServer } from 'ws';
import { createRoom } from '../services/roomService.js';
import { broadcastUpdateRoom } from '../utils.js';


export const handleCreateRoom = (wss: WebSocketServer, ws: WebSocket) => {
	const response = createRoom();
	ws.send(JSON.stringify(response));
	broadcastUpdateRoom(wss);
};