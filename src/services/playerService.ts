import { players } from '../models/player.js';
import crypto from 'node:crypto';

export const registerPlayer = (name: string, password: string) => {
	//console.log('name:', name, 'password', password);
	if (!name || !password) {
		return { type: 'reg', data: JSON.stringify({ error: true, errorText: 'Invalid registration data' }), id: 0 };
	}

	if (players[name]) {
		return { type: 'reg', data: JSON.stringify ({ name, index: '', error: true, errorText: 'Player already exists' }), id: 0 };
	}

	const playerId = crypto.randomUUID();

	players[name] = { name, password, index: playerId,  wins: 0 };
	//console.log('players', players)
	return { type: 'reg', data: JSON.stringify({ name, index: playerId, error: false }), id: 0 };
}