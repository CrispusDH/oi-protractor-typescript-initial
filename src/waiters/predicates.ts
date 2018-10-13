import { ArrayFragment } from '../fragment/array-fragment.wrapper';
import { Fragment } from '../fragment/fragment.wrapper';

export class Predicates {
  public static isArrayNotEmpty(array: ArrayFragment<Fragment>): () => Promise<boolean> {
    return async () => {
      return await array.count() > 0;
    };
  }
}
