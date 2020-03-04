import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dkaoda24Navigator from '../features/Dkaoda24/navigator';
import Daosk23Navigator from '../features/Daosk23/navigator';
import Daosk22Navigator from '../features/Daosk22/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';
import stringNavigator from '../features/string/navigator';
import String56BlueprintNavigator from '../features/String56Blueprint/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Dkaoda24: { screen: Dkaoda24Navigator },
Daosk23: { screen: Daosk23Navigator },
Daosk22: { screen: Daosk22Navigator },
EmailAuth: { screen: EmailAuthNavigator },
string: { screen: stringNavigator },
String56Blueprint: { screen: String56BlueprintNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
