import StorageRepository from '@/packages/shared/repositories/storage';
import LanguageService from '@/packages/shared/services/language';
import TokenService from '@/packages/shared/services/token';

import config from '@/app/config/index';
import CoursesRepository from '@/packages/courses/repository/courses';
import CourseService from '@/packages/courses/service/courses';

export const initApplicationContext = () => {
  const storageRepository = new StorageRepository(config.storage);

  const languageService = new LanguageService(storageRepository);
  const tokenService = new TokenService(storageRepository);

  const courseRepository = new CoursesRepository(config.api.courses, tokenService);
  const courseService = new CourseService(courseRepository);

  return {
    repositories: { storage: storageRepository },
    services: { language: languageService, course: courseService },
  };
};

export const { services, repositories } = initApplicationContext();
