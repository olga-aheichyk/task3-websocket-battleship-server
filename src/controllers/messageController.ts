import WebSocket, { WebSocketServer } from 'ws';
import { handleRegistration } from './playerController.js';
import { handleCreateRoom } from './roomController.js';

interface Message {
	type: string;
	data: string;
	id: string;
};

export const handleMessage = (wss: WebSocketServer, ws: WebSocket, message: Message) => {
	console.log('message', message);
	switch (message.type) {
		case 'reg':
			handleRegistration(ws, message.data)
			break;

		case 'create_room':
			handleCreateRoom(wss, ws);
			break;

		case 'add_user_to_room':
			console.log('add_user_to_room');
			break;

		// case ''

		default:
			ws.send(JSON.stringify({ type: 'error', data: JSON.stringify({ message: 'Unknown command' }), id: message.id }));
	}
};