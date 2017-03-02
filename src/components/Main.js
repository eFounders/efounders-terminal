import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Terminal from './Terminal';
import * as actionCreators from '../actions';

const mapStateToProps = state => state;

const mapDispachToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const Main = connect(mapStateToProps, mapDispachToProps)(Terminal);

export default Main;
