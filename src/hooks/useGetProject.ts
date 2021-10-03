import { find } from 'lodash';
import { ProjectDetails } from './../types/constants';

import { CompanyData } from './../constant/companyData';

export const useGetProject = (
  projectId?: string
): ProjectDetails | undefined => {
  if (!projectId) return undefined;

  let projectDetails: ProjectDetails | undefined;

  for (let company of CompanyData) {
    const project = find(company.projects, { id: projectId });
    if (project) {
      projectDetails = project;
      if (project) break;
    } else {
      throw Error('Invalid project id');
    }
  }

  return projectDetails;
};
