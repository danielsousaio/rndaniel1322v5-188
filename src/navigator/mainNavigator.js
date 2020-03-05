import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dkaoda69Navigator from '../features/Dkaoda69/navigator';
import Dkaoda66Navigator from '../features/Dkaoda66/navigator';
import Dkaoda63Navigator from '../features/Dkaoda63/navigator';
import Dkaoda60Navigator from '../features/Dkaoda60/navigator';
import Dkaoda57Navigator from '../features/Dkaoda57/navigator';
import Dkaoda54Navigator from '../features/Dkaoda54/navigator';
import Dkaoda51Navigator from '../features/Dkaoda51/navigator';
import Dkaoda48Navigator from '../features/Dkaoda48/navigator';
import Dkaoda45Navigator from '../features/Dkaoda45/navigator';
import Dkaoda42Navigator from '../features/Dkaoda42/navigator';
import Dkaoda39Navigator from '../features/Dkaoda39/navigator';
import Dkaoda36Navigator from '../features/Dkaoda36/navigator';
import Dkaoda33Navigator from '../features/Dkaoda33/navigator';
import Dkaoda30Navigator from '../features/Dkaoda30/navigator';
import Dkaoda27Navigator from '../features/Dkaoda27/navigator';
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
Dkaoda69: { screen: Dkaoda69Navigator },
Dkaoda66: { screen: Dkaoda66Navigator },
Dkaoda63: { screen: Dkaoda63Navigator },
Dkaoda60: { screen: Dkaoda60Navigator },
Dkaoda57: { screen: Dkaoda57Navigator },
Dkaoda54: { screen: Dkaoda54Navigator },
Dkaoda51: { screen: Dkaoda51Navigator },
Dkaoda48: { screen: Dkaoda48Navigator },
Dkaoda45: { screen: Dkaoda45Navigator },
Dkaoda42: { screen: Dkaoda42Navigator },
Dkaoda39: { screen: Dkaoda39Navigator },
Dkaoda36: { screen: Dkaoda36Navigator },
Dkaoda33: { screen: Dkaoda33Navigator },
Dkaoda30: { screen: Dkaoda30Navigator },
Dkaoda27: { screen: Dkaoda27Navigator },
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
