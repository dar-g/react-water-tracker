import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import WaterTracker from './components/WaterTracker/WaterTracker';
import UserSettings from './components/UserSettings';
import UserStatistics from './components/UserStatistics/UserStatistics';

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
    <main className="main">
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
    </main>

  );
}

export default MainPage;
