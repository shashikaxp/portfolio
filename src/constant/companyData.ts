import { CompanyData as CompanyDataType } from './../types/constants';

import { kinza } from './experience/kinza';
import { epigro } from './experience/epigro';
import { cyrup } from './experience/cyrup';
import { coreIllumination } from './experience/core-illumination';
import { bazzle } from './experience/bazzle';
import { sideProjects } from './experience/sideProjects/index';

export const CompanyData: CompanyDataType[] = [
  sideProjects,
  bazzle,
  coreIllumination,
  cyrup,
  epigro,
  kinza,
];
