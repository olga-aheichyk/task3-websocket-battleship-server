import { WebSocket } from 'ws';
import { registerPlayer } from '../services/playerService.js';


export const handleRegistration = (ws: WebSocket, data: string) => {
	const parsedData = JSON.parse(data);
	const response = registerPlayer(parsedData.name, parsedData.password);

	ws.send(JSON.stringify(response));
};