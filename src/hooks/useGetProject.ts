import { find } from 'lodash';
import { ProjectDetails } from './../types/constants';

import { CompanyData } from './../constant/companyData';
import { SideProjects } from './../constant/sideProjects';

export const useGetProject = (
  projectId?: string
): ProjectDetails | undefined => {
  if (!projectId) return undefined;

  let projectDetails: ProjectDetails | undefined;

  for (let company of [...CompanyData, ...SideProjects]) {
    const project = find(company.projects, { id: projectId });
    if (project) {
      projectDetails = project;
      if (project) break;
    }
  }

  return projectDetails;
};
