/**
 * Created by if_found_call_0586288454 on 24/05/2017 ap. J.-C..
 */
import {GetPercentagePipe} from './pipes';

describe('getPercentage', () => {
  let pipe = new GetPercentagePipe();
  it ('transforms "10", "100" to "10%"', () => {
    expect (pipe.transform(10, 100, null)).toBe(10);
  });
});
