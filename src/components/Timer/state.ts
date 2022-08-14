import { createStore, createApi } from 'effector';
import { useStore } from 'effector-react';

export type TimerStateType = {
  isActive: boolean;
};

const INITIAL_STATE: TimerStateType = { isActive: true };

export const $timer = createStore(INITIAL_STATE);

export const timerApi = createApi($timer, {
  setActive(_, isActive: boolean) {
    return { isActive };
  },
});

export const useTimer = () => {
  const store = useStore($timer);

  return { isActive: store.isActive, setActive: timerApi.setActive };
};
