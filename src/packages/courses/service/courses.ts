import { ICourseData } from '@/packages/courses/models/repository/Courses';
import CoursesRepository from '@/packages/courses/repository/courses';

class CourseService {
  public repository: CoursesRepository;

  constructor(repository: CoursesRepository) {
    this.repository = repository;

    this.getCourses = this.getCourses.bind(this);
  }

  async getCourses(tag?: string): Promise<ICourseData> {
    console.log('get tag', tag);
    const courses = await this.repository.getCourses();

    // getting unique tags
    const tags = [...new Set(courses.map((item) => item.tags).flat()).values()];

    const coursesList = tag
      ? courses.filter((courseItem) => courseItem.tags.includes(tag))
      : courses;

    return {
      data: coursesList,
      tags,
    };
  }
}

export default CourseService;
