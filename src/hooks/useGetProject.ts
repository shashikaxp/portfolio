import find from 'lodash/find';

import { ProjectData } from './../constant/projectData';

export const useGetProject = (projectId?: string) => {
  if (!projectId) return undefined;
  return find(ProjectData, { id: projectId });
};
