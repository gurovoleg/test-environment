import { useLayoutEffect } from 'react';

type callBackType = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;

type useIntersectionObserverArgs = {
  selector?: string;
  callback?: callBackType;
  options?: IntersectionObserverInit;
};

const defaultOptions: IntersectionObserverInit = {
  // parent or viewport
  root: null,
  rootMargin: '0px',
  // intersection with element
  threshold: 0.5,
};

const changeElementColor: callBackType = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.style.backgroundColor = 'deepSkyBlue';
      // stop observing
      // observer.unobserve(entry.target);
    } else {
      entry.target.style.backgroundColor = 'unset';
    }
  });
};

export const useIntersectionObserver = ({
  selector = 'observed-element',
  options = defaultOptions,
  callback = changeElementColor,
}: useIntersectionObserverArgs): void => {
  useLayoutEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    const elements = document.querySelectorAll(`[data-observed=${selector}]`);

    console.log('HOOK', selector, elements);

    elements.forEach((element) => observer.observe(element));
  }, []);
};
