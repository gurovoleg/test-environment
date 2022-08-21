import { action, makeObservable, observable } from 'mobx';
import { useMemo } from 'react';

export type AbstractTimerStateType = {
  name: string;
  isActive?: boolean;
};

// Abstract Timer with mobX state
export class TimerState implements AbstractTimerStateType {
  name = '';
  isActive = true;

  constructor(name: string, isActive = true) {
    this.name = name;
    this.isActive = isActive;

    makeObservable(this, {
      isActive: observable,
      setActive: action,
    });

    this.setActive = this.setActive.bind(this);
  }

  setActive(isActive = true) {
    this.isActive = isActive;
  }
}

export const useTimer = (name?: string, isActive?: boolean) => {
  const timer = useMemo(() => {
    return new TimerState(name, isActive);
  }, []);

  return { ...timer };
};
