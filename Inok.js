export * from './strings';
export * from './dates';
export * from './objects';
export * from './localstorage';
export * from './events';
export * from './url';
export * from './forms';
export * from './speech'; 
export * from './logs';
export * from './arrays';
export * from './slugs';
export * from './async';
export * from './numbers';
export * from './enums';

import * as strings from './strings';
import * as dates from './dates';
import * as objects from './objects';
import * as localstorage from './localstorage';
import * as events from './events';
import * as url from './url';
import * as forms from './forms';
import * as speech from './speech'; 
import * as logs from './logs';
import * as arrays from './arrays';
import * as slugs from './slugs';
import * as async from './async';
import * as numbers from './numbers';
import * as enums from './enums';

export default {
  ...strings,
  ...dates,
  ...objects,
  ...localstorage,
  ...url,
  ...forms,
  ...speech,
  ...logs,
  ...slugs,
  ...async,
  ...numbers,
  ...enums
}