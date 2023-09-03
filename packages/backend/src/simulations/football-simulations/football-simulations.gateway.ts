import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { FootballSimulationsService } from './football-simulations.service';
import { config } from 'src/config/app/configuration';
import { CommunicationMessages } from './types/communication';

const { allowedOrigins } = config;
const { port, namespace } = config.simulations.football;

@WebSocketGateway(port, {
  namespace: namespace,
  transports: ['websocket'],
  cors: allowedOrigins,
})
export class FootballSimulationsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly footballSimulationsService: FootballSimulationsService,
  ) {}

  handleConnection(client: Socket): string {
    console.log(`Client connected: ${client.id}`);
    return 'Connected';
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, data: string): void {
    switch (data) {
      case CommunicationMessages.INIT:
        this.footballSimulationsService.initData(client.id);

        const matches = this.footballSimulationsService.getMatches(client.id);

        this.server.to(client.id).emit(CommunicationMessages.INIT, matches);
        break;
      case CommunicationMessages.START:
        this.footballSimulationsService
          .startSimulation(client.id)
          .subscribe((match) => {
            if (!match) {
              this.server
                .to(client.id)
                .emit(
                  CommunicationMessages.SIMULATION_STOPPED,
                  'Simulation stopped',
                );
            } else {
              this.server
                .to(client.id)
                .emit(CommunicationMessages.SCORE_UPDATE, match);
            }
          });
        break;
      case CommunicationMessages.STOP:
        this.footballSimulationsService.stopSimulation(client.id);
        this.server
          .to(client.id)
          .emit(CommunicationMessages.SIMULATION_STOPPED, 'Simulation stopped');
        break;
    }
  }

  handleDisconnect(client: Socket): void {
    this.footballSimulationsService.stopSimulation(client.id);
  }
}
