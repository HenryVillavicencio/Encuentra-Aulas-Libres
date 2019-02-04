import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import {Icon} from 'native-base'
import Home from '../Home'
import Profile from '../Profile'

const HomeTab = createMaterialTopTabNavigator(
    {
        Home:{
            screen: Home,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="home" size={30} color="#900" />
                  )
            }
        },
        Profile:{
            screen: Profile,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="home" size={30} color="#900" />
                  )
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions :{
            showIcon: true,
            showLabel: false

        }

    }
    );
export default HomeTab;