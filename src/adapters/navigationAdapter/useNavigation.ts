import { useHistory } from 'react-router-dom';

import { ROUTES_PATHS } from '@routes/types';
import { Navigation } from '@application/index';

export function useNavigation(): Navigation {
  const history = useHistory();

  return {
    navigateTo(path: ROUTES_PATHS): void {
      history.push(path);
    },
  };
}
