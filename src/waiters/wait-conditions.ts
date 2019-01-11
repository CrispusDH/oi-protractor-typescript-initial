import { ElementFinder, ExpectedConditions as EC } from 'protractor';
import { ArrayFragment } from '../fragment/array-fragment.wrapper';
import { waitFor } from 'oi-verify';
import { Fragment } from '../fragment/fragment.wrapper';
import { Predicates } from './predicates';

export class WaitConditions {
  public static async clickable(element: ElementFinder): Promise<void> {
    await waitFor(
      EC.elementToBeClickable(element) as () => Promise<boolean>,
      `${element.locator()} was expected to be clickable`,
    );
  }

  public static async visible(element: ElementFinder): Promise<void> {
    await waitFor(
      EC.visibilityOf(element) as () => Promise<boolean>,
      `${element.locator()} was expected to be visible`,
    );
  }

  public static async invisible(element: ElementFinder): Promise<void> {
    await waitFor(
      EC.invisibilityOf(element) as () => Promise<boolean>,
      `${element.locator()} was expected to be invisible`,
    );
  }

  public static async arrayIsNotEmpty(array: ArrayFragment<Fragment>): Promise<void> {
    await waitFor(
      Predicates.isArrayNotEmpty(array),
      'Array of fragments expected to be not empty',
    );
  }
}
