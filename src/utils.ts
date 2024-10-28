import WebSocket, { WebSocketServer } from 'ws';
import { rooms } from './models/room.js';

export const broadcastUpdateRoom = (wss: WebSocketServer) => {
	const availableRooms = Object.values(rooms)
		.filter(room => room.players.length === 1)
		.map(room => ({
			roomId: room.id,
			roomUsers: room.players.map((player) => ({
				name: player.name,
				index: player.index
			}))
		}));

	console.log('availableRooms', availableRooms)
	wss.clients.forEach((client: WebSocket) => {
		if (client.readyState === WebSocket.OPEN) {
			client.send(JSON.stringify({ type: 'update_room', data: JSON.stringify({ availableRooms }), id: 0 }));
		}
	})
};

