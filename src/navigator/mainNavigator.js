import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item163120Navigator from '../features/Add-Item163120/navigator';
import Maps163116Navigator from '../features/Maps163116/navigator';
import UserProfile163112Navigator from '../features/UserProfile163112/navigator';
import UserProfile163080Navigator from '../features/UserProfile163080/navigator';
import Tutorial163079Navigator from '../features/Tutorial163079/navigator';
import NotificationList163051Navigator from '../features/NotificationList163051/navigator';
import Settings163050Navigator from '../features/Settings163050/navigator';
import Settings163042Navigator from '../features/Settings163042/navigator';
import UserProfile163040Navigator from '../features/UserProfile163040/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item163120: { screen: Add-Item163120Navigator },
Maps163116: { screen: Maps163116Navigator },
UserProfile163112: { screen: UserProfile163112Navigator },
UserProfile163080: { screen: UserProfile163080Navigator },
Tutorial163079: { screen: Tutorial163079Navigator },
NotificationList163051: { screen: NotificationList163051Navigator },
Settings163050: { screen: Settings163050Navigator },
Settings163042: { screen: Settings163042Navigator },
UserProfile163040: { screen: UserProfile163040Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
