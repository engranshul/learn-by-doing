import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// styled components
import StyledComponents from './src/styled-components-demo/screens/StyledComponentsExample';

const navigator = createStackNavigator(
  {
    StyledComponents: StyledComponents,
  },
  {
    initialRouteName: 'StyledComponents',
    defaultNavigationOptions: {
      title: 'Styled components example..',
    },
  }
);

export default createAppContainer(navigator);
