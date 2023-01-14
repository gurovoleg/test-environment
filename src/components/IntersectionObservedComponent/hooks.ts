import { useLayoutEffect } from 'react';

type useIntersectionObserverArgs = {
  selector?: string;
  callback?: IntersectionObserverCallback;
  options?: IntersectionObserverInit;
};

const defaultOptions: IntersectionObserverInit = {
  root: null, // parent or viewport
  rootMargin: '0px',
  threshold: 0.5, // intersection with element
};

const changeElementColor: IntersectionObserverCallback = (
  entries,
  observer
) => {
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
