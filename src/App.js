import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  // took out given state const and moved to initialState in rootReducer

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        {/* changed all state.thing calls to props.thing */}
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

// added mapStateToProps
const mapStateToProps = state => {
  console.log('state: ', state);
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  };
};

// exported with connect
export default connect(
  mapStateToProps,
  // { removeFeature, buyItem }
)(App);
