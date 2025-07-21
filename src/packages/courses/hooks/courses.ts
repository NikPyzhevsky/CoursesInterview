import { useQuery } from '@tanstack/react-query';

import { services } from '@/app/config/init';
import { ICourseData } from '@/packages/courses/models/repository/Courses';

export const useGetCourses = (tag?: string) => {
  const { data, error, isLoading } = useQuery<ICourseData>({
    queryFn: () => services.course.getCourses(tag),
    queryKey: ['courses', tag],
  });

  return { data, error, isLoading };
};
