export interface Player {
	name: string;
	password: string;
	wins: number;
	index: string;
};

export const players: Record<string, Player> = {};