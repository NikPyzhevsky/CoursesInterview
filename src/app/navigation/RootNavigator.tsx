import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import MainNavigator from '@/app/navigation/Main';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  const getNavigator = () => {
    // here can be some checks for roles in order to return correct navigator

    return {
      component: MainNavigator,
      name: 'main',
    };
  };

  const currentNavigator = getNavigator();

  return (
    <RootStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
        headerShown: false,
      }}
    >
      <RootStack.Screen component={currentNavigator.component} name={currentNavigator.name} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
