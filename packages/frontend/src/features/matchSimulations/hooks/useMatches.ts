import socketIO from 'socket.io-client';
import { config } from '../../../config';
import { useEffect } from 'react';
import { ReceiveMessages, SendMessages } from '../types/communication';
import { MatchResult } from '../types/match';
import matchesStore from '../../../store/matchesStore';
import { SimulationState } from '../types/simulation';

const {
  simulation: { baseUrl, path },
} = config;

const socket = socketIO(`ws://${baseUrl}/${path}`, { transports: ['websocket'] });

export const useMatches = () => {
  const startSimulation = () => {
    socket.send(SendMessages.START);
    matchesStore.setSimulationState(SimulationState.RUNNING);
  };

  const stopSimulation = () => {
    socket.send(SendMessages.STOP);
    matchesStore.setSimulationState(SimulationState.FINISHED);
  };

  const initSimulation = () => {
    socket.send(SendMessages.INIT);
    matchesStore.setSimulationState(SimulationState.NOT_STARTED);
  };

  useEffect(() => {
    socket.connect();

    socket.on('connect', () => {
      initSimulation();
    });

    socket.on(ReceiveMessages.SIMULATION_STOPPED, () => {
      matchesStore.setSimulationState(SimulationState.FINISHED);
    });

    socket.on(ReceiveMessages.SCORE_UPDATE, (data: MatchResult[]) => {
      matchesStore.setMatches(data);
    });

    socket.on(ReceiveMessages.INIT, (data: MatchResult[]) => {
      matchesStore.setMatches(data);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected');
    });

    return () => {
      socket.disconnect();
      socket.off('connect');
      socket.off(ReceiveMessages.SIMULATION_STOPPED);
      socket.off(ReceiveMessages.SCORE_UPDATE);
      socket.off('disconnect');
    };
  }, []);

  return { startSimulation, stopSimulation, initSimulation };
};
