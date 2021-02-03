import { Paper } from '@material-ui/core';

export default interface IPropsMaterial {
  component?: string | typeof Paper | null;
  elevation?: number;
  square?: boolean;
  $src?: string | undefined;
}
