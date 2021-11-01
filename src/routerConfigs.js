import LoginPage from './containers/LoginPage/index';

import RegisterPage from './containers/RegisterPage/index';
import NameInput from './containers/RegisterPage/components/NameInput';
import AgeInput from './containers/RegisterPage/components/AgeInput';
import WeightInput from './containers/RegisterPage/components/WeightInput';
import GenderInput from './containers/RegisterPage/components/GenderInput';

import MainPage from './containers/MainPage/index';
import WaterTracker from './containers/MainPage/components/WaterTracker/WaterTracker';
import UserSettings from './containers/MainPage/components/UserSettings';
import UserStatistics from './containers/MainPage/components/UserStatistics';

const routes = [
  {
    id: 'login',
    path: "/login",
    component: LoginPage,
    //isProtected: false,
  },
  {
    id: 'register',
    path: "/register",
    component: RegisterPage,
    //isProtected: false,
    routes: [
      {
        id: 'name',
        path: "/register/name",
        component: NameInput
      },
      {
        id: 'age',
        path: "/register/age",
        component: AgeInput
      },
      {
        id: 'weight',
        path: "/register/weight",
        component: WeightInput
      },
      {
        id: 'gender',
        path: "/register/gender",
        component: GenderInput
      }
    ]
  },
  {
    id: 'main',
    path: "/main",
    component: MainPage,
    //isProtected: true,
    routes: [
      {
        path: "/main/tracker",
        component: WaterTracker
      },
      {
        path: "/main/statistics",
        component: UserSettings
      },
      {
        path: "/main/settings",
        component: UserStatistics
      }
    ]
  }
];

export default routes;
