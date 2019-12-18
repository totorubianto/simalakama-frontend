// import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { Routes } from './router/router';
// import { AppState } from './stores/indexReducer';
// import setAuthToken from './utils/setAuthToken';
// import { AuthState } from './stores/auth/interfaces/auth.interface';
// import { loadUser } from './stores/auth/action';
// interface AppProps {
//   auth: AuthState;
//   loadUser: any;
// }

// class App extends Component<AppProps> {
//   componentDidMount = async () => {
//     await this.props.loadUser();
//   };
//   render() {
//     return (
//       <div className='App'>
//         <Router>
//           <Routes />
//         </Router>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state: AppState) => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps, { loadUser })(App);

import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { Routes } from './router/router';
import { AppState } from './stores/indexReducer';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './stores/auth/action';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
interface AppProps {
  auth: any;
  loadUser: any;
}
const App: React.FC<AppProps> = ({ auth, loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return (
    <div className='App'>
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { loadUser })(App);
