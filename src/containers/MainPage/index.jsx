import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import WaterTracker from './components/WaterTracker/WaterTracker';
import UserSettings from './components/UserSettings';
import UserStatistics from './components/UserStatistics';

const MainPage = ({
  isUserRegistered,
  getUserProperty,
}) => {
  const { path } = useRouteMatch();

  if (!isUserRegistered) {
    return (
      <Redirect to="/register" />
    );
  };

  return (
    <div style={{height: '100%'}}>
      <Switch>
        <Route exact path="/main">
            <Redirect to={`${path}/tracker`} />
        </Route>
        <Route path={`${path}/tracker`}>
            <WaterTracker />
        </Route>
        <Route path={`${path}/statistics`}>
            <UserStatistics />
        </Route>
        <Route path={`${path}/settings`}>
            <UserSettings getUserProperty={getUserProperty} />
        </Route>
      </Switch>
    </div>

  );
}

export default MainPage;
