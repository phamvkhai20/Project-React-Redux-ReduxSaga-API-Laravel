import React from 'react'
import PropTypes from 'prop-types'
import { store } from './modules/RootSaga'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './Containers/AppContainer';
const BoxApp = props => {
    
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    )
}
BoxApp.propTypes = {
}
export default BoxApp

if (document.getElementById('root')) {
    ReactDOM.render(<BoxApp />, document.getElementById('root'));
}