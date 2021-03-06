import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import HelloWorld7 from "./components/a7/HelloWorld";
import Practice7 from "./components/a7/Practice";
import Build7 from "./components/a7/Build";
import HomeScreen7 from "./components/a7/Build/HomeScreen";
import ExploreScreen7 from "./components/a7/Build/ExploreScreen/ExploreScreen";
import ProfileScreen7 from "./components/a7/Build/ProfileScreen";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import who from "./reducers/who";
import tweets from "./reducers/tweets";
import profile from "./reducers/profile"
import Assignment6 from "./components/a6";
import EditProfile7 from "./components/a7/Build/EditProfile";
/* ==================================================================================== */
import HelloWorld from "./components/a8/HelloWorld";
import Practice from "./components/a8/Practice";
import Build from "./components/a8/Build"
import HomeScreen from "./components/a8/Build/HomeScreen";
import ExploreScreen from "./components/a8/Build/ExploreScreen/ExploreScreen";
import ProfileScreen from "./components/a8/Build/ProfileScreen";
import EditProfile from "./components/a8/Build/EditProfile";
import A9 from "./components/a9";
import A8 from "./components/a8";
import Assignment7 from "./components/a7";

const reducer = combineReducers({tweets: tweets, who: who, profile: profile})
const store = createStore(reducer);

function App() {
  return (
      <>
          <Provider store={store}>
              <BrowserRouter>
                  <div className="container">
                      <Link to="/a6/practice">A6</Link> <span style={{color:"white"}}> | </span>
                      <Link to="/a7/practice">A7</Link> <span style={{color:"white"}}> | </span>
                      <Link to="/a8/practice">A8</Link> <span style={{color:"white"}}> | </span>
                      <Link to="/a9/practice">A9</Link>
                      <Route path="/a9">
                        <A9/>
                      </Route>
                      <Route path="/a8">
                          <A8/>
                      </Route>
                      <Route path="/a7">
                          <Assignment7/>
                      </Route>
                      <Route path="/a6">
                          <Assignment6/>
                      </Route>
                  </div>
              </BrowserRouter>
          </Provider>
      </>
  );
}

/*
<Provider store={store}>
              <BrowserRouter>
                  <div className="container">
                      <Route path="/a8/hello" exact={true}>
                          <HelloWorld/>
                      </Route>
                      <Route path={["", "/a8", "/a8/practice"]} exact={true}>
                          <Practice/>
                      </Route>
                      <Route path="/a8/twitter" exact={true}>
                          <Build/>
                      </Route>
                      <Route path="/a8/twitter/home" component={HomeScreen}/>
                      <Route path="/a8/twitter/explore" component={ExploreScreen}/>
                      <Route path="/a8/twitter/profile" component={ProfileScreen}/>
                      <Route path="/a8/twitter/edit-profile" component={EditProfile}/>
                  </div>
              </BrowserRouter>
          </Provider>
 */

/*
<Provider store={store}>
              <BrowserRouter>
                  <div className="container">
                      <Route path="/a7/hello" exact={true}>
                          <HelloWorld7/>
                      </Route>
                      <Route path={["", "/a7", "/a7/practice"]} exact={true}>
                          <Practice7/>
                      </Route>
                      <Route path="/a7/twitter" exact={true}>
                          <Build7/>
                      </Route>
                      <Route path="/a7/twitter/home" component={HomeScreen7}/>
                      <Route path="/a7/twitter/explore" component={ExploreScreen7}/>
                      <Route path="/a7/twitter/profile" component={ProfileScreen7}/>
                      <Route path="/a7/twitter/edit-profile" component={EditProfile7}/>
                  </div>
              </BrowserRouter>
          </Provider>
 */

/*
<BrowserRouter>
    <div className="container">
        <Route path={["/a6", "/"]}>
            <Assignment6/>
        </Route>
    </div>
</BrowserRouter>

 */
export default App;
