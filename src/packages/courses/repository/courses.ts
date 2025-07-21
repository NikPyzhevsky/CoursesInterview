import ApiRepository from '@/packages/shared/repositories/api/api';
import TokenService from '@/packages/shared/services/token';

import { ICourse } from '@/packages/courses/models/repository/Courses';

class CoursesRepository extends ApiRepository {
  constructor(baseUrl: string, tokenService: TokenService) {
    super(baseUrl, tokenService);

    this.getCourses = this.getCourses.bind(this);
  }

  async getCourses(): Promise<ICourse[]> {
    const res = await this.http.get('/docs/courses.json');

    return res.data;
  }
}

export default CoursesRepository;
