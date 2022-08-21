import { createStore, createEvent, Store, Event } from 'effector';
import { useMemo } from 'react';
import { useStore } from 'effector-react';

// Abstract Timer with effector state
export class TimerClass {
  name: string;

  $store: Store<boolean>;
  setActiveEvent: Event<boolean>;

  constructor(name: string, isActive = true) {
    this.name = name;
    this.$store = createStore(isActive);
    this.setActiveEvent = createEvent<boolean>('create-event');

    this.$store.on(this.setActiveEvent, (_, isActive) => isActive);
    // this.$store.watch((state) => console.log(`${this.name} state`, state));

    this.setActive = this.setActive.bind(this);
  }

  setActive(isActive = true) {
    this.setActiveEvent(isActive);
  }
}

export const useTimer = (name?: string, isActive?: boolean) => {
  const timer = useMemo(() => {
    return new TimerClass(name, isActive);
  }, []);

  const state = useStore(timer.$store);

  return { isActive: state, setActive: timer.setActive };
};
