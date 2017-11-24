import MainHeader from "./component";
import { connect } from "react-redux";
import {
  fetchCategories,
  fetchNewReleases,
  fetchFeatured
} from '../../actions/browseActions';

import { updateHeaderTitle } from '../../actions/uiActions';
import { updateViewType } from '../../actions/songActions';
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => {
  return {
    songPaused: state.songsReducer.songPaused,
    headerTitle: state.uiReducer.title,
    viewType: state.songsReducer.viewType,
    playlistMenu: state.playlistReducer.playlistMenu,
    token: state.tokenReducer.token
  }

};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
    fetchCategories,
    fetchNewReleases,
    updateHeaderTitle,
    updateViewType,
    fetchFeatured
  }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
