import { lazy, Suspense, useState } from 'react';
import { useIntersectionObserver } from '../IntersectionObservedComponent/hooks';

// const LazyMockData = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const result = import('./MockData');
//
//       resolve(result);
//     }, 2000);
//   });
// });

const LazyMockServerData = lazy(() => import('./ServerData'));

export const LazyLoading = (): JSX.Element => {
  // const ref = useRef();
  const [loaded, setLoaded] = useState(false);
  //
  // const scrollHandler = () => {
  //   const coords = ref.current.getBoundingClientRect();
  //
  //   if (!loaded && coords.top <= (document.documentElement.clientHeight || window.innerHeight)) {
  //     setLoaded(true);
  //   }
  // };

  // useEffect(() => {
  //   if (ref.current) {
  //     window.addEventListener('scroll', scrollHandler);
  //   }
  //
  //   return () => window.removeEventListener('scroll', scrollHandler);
  // }, [ref.current]);

  useIntersectionObserver({
    selector: 'lazy-container',
    callback: (entries, _) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          // entry.target.style.height = 'unset';
          entry.target.removeAttribute('height');
          // observer.unobserve(entry.target);
        } else {
          // setLoaded(false);
        }
      });
    },
    options: {
      root: null,
      threshold: 1,
    },
  });

  return (
    <div
      data-observed="lazy-container"
      style={{ border: '2px solid black', position: 'relative' }}
    >
      <Suspense fallback={<div>Suspense loading...</div>}>
        {/*{loaded && <LazyMockData />}*/}
        {loaded && <LazyMockServerData />}
      </Suspense>
      <div style={{ height: '200px' }}></div>
    </div>
  );
};
