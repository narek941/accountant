import shortid from 'shortid';

import {
  // EnglishFlagCircle,
  RussianFlagCircle,
  // EnglishFlag,
  RussianFlag,
  ArmenianFlag,
  ArmenianFlagCircle,
} from '../icons';

const languageList = [
  // {
  //   id: shortid.generate(),
  //   index: 0,
  //   Icon: EnglishFlag,
  //   IconCircle: EnglishFlagCircle,
  //   code: 'en',
  //   nativeCode: 'eng',
  // },
  {
    id: shortid.generate(),
    Icon: ArmenianFlag,
    IconCircle: ArmenianFlagCircle,
    index: 1,
    code: 'am',
    nativeCode: 'Հայ',
  },
  {
    id: shortid.generate(),
    index: 2,
    Icon: RussianFlag,
    IconCircle: RussianFlagCircle,
    code: 'ru',
    nativeCode: 'Ру',
  },
 
];

export default languageList;
