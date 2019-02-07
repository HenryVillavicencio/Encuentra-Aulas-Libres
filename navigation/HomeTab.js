import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import { Icon } from 'native-base'
import Home from '../screens/Home'
import Profile from '../screens/Profile'

const HomeTab = createMaterialTopTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="home" style={{ color: 'white' }} />
                )
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon type="FontAwesome" name="user" style={{ color: 'white' }} />
                )
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            indicatorStyle: {
                borderBottomColor: '#ffffff',
                borderBottomWidth: 2
            }
        }

    }
);
export default HomeTab;