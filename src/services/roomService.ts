import { randomUUID } from 'node:crypto';
import { rooms } from '../models/room.js';


export const createRoom = () => {
	const newRoomId = randomUUID();
	rooms[newRoomId] = { id: newRoomId, players: [], ships: [], gameState: {}, currentPlayer: null };
	// console.log('rooms', rooms);

	return { type: 'update_room', data: JSON.stringify([{ newRoomId, roomUsers: [] }]), id: 0 };
};