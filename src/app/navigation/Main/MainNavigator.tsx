import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { type MainStackParamList } from '@/app/models/navigation/main';
import { MAIN_ROUTE } from '@/app/routes/routes';
import { MainScreens } from '@/app/screens';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => (
  <MainStack.Navigator
    initialRouteName={MAIN_ROUTE.COURSES_SCREEN}
    screenOptions={{
      headerShown: false,
    }}
  >
    <MainStack.Group>
      <MainStack.Screen component={MainScreens.CoursesScreen} name={MAIN_ROUTE.COURSES_SCREEN} />
      <MainStack.Screen
        component={MainScreens.FiltersScreen}
        options={{ presentation: 'fullScreenModal' }}
        name={MAIN_ROUTE.FILTER_SCREEN}
      />
    </MainStack.Group>
  </MainStack.Navigator>
);

export default MainNavigator;
