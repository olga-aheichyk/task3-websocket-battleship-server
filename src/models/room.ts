import { Player } from './player.js';

interface Room {
	id: string;
	players: Player[];
	ships: any[];
	gameState: any;
	currentPlayer: string | null;
};

export const rooms: Record<string, Room> = {};