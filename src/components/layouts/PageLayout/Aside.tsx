import {
  AsideWrapper,
  AsideItem,
  AsideGroup,
  AsideGroupTitle,
} from './PageLayout.styled';
import { Link, RouteObject } from 'react-router-dom';
import { routes } from 'core/routing';
import { capitalizeFirstLetter } from 'utils';

const renderRoutes = (routes: RouteObject[], parentRoute?: string) => {
  return routes.map((route, index) => {
    if (route.children?.length) {
      if (parentRoute) {
        parentRoute += `/${route.path}`;
      } else {
        parentRoute = route.path;
      }

      return (
        <AsideGroup key={index}>
          <AsideGroupTitle>{capitalizeFirstLetter(route.path)}</AsideGroupTitle>
          {renderRoutes(route.children, parentRoute)}
        </AsideGroup>
      );
    } else {
      if (route.path === '/') {
        return null;
      }

      let routeName = route.path;
      let routePath = parentRoute ? `${parentRoute}/${route.path}` : route.path;

      if (route.path?.startsWith(':') && route.id) {
        routePath = parentRoute ? `${parentRoute}/${route.id}` : route.id;
        routeName = route.id;
      }

      if (parentRoute && !route.path && route.index === true) {
        routeName = parentRoute.split('/').at(-1);
        routePath = parentRoute;
      }

      return (
        <AsideItem key={index}>
          <Link to={routePath}>{capitalizeFirstLetter(routeName)}</Link>
        </AsideItem>
      );
    }
  });
};

export const Aside = (): JSX.Element => {
  return <AsideWrapper>{renderRoutes(routes[0].children)}</AsideWrapper>;
};
