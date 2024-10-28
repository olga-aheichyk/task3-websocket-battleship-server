import WebSocket, { WebSocketServer } from 'ws';
import { handleMessage } from './controllers/messageController.js';

const clients: WebSocket[] = [];

export const startWebSocketServer = (wsPort: number) => {
	const wss = new WebSocketServer({ port: wsPort });

	wss.on('connection', (ws: WebSocket) => {
		clients.push(ws);

		ws.on('message', (message: string) => {
			try {
				const parsedMessage = JSON.parse(message);
				handleMessage(wss, ws, parsedMessage);
			}

			catch {
				ws.send(JSON.stringify({ type: 'error', data: JSON.stringify({ message: 'Invalid request' }), id: 0 }));
			}
		});

		ws.on('close', () => {
			const index = clients.indexOf(ws);
			if (index > -1) {
				clients.splice(index, 1);
			}
		});

	});

	console.log(`WebSocket started work on ws://localhost:${wsPort}`);
};