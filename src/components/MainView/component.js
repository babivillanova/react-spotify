import React from "react";
import PropTypes from "prop-types";
import SongList from "../SongList";
import AlbumList from "../AlbumList";
import ArtistList from "../ArtistList";
import BrowseView from "../BrowseView";
import "./MainView.css";

const MainView = ({ headerTitle, audioControl, resumeSong, pauseSong }) => {

  let component; 
  switch(headerTitle){

    case 'Albums': 
      component = <AlbumList audioControl={audioControl} />;
      break;
    case 'Artists':
      component = <ArtistList />;
      break;
    case 'Browse': 
      component = <BrowseView />;
      break; 
    case 'Songs': 
      component = (<SongList
        resumeSong={resumeSong}
        pauseSong={pauseSong}
        audioControl={audioControl}
      />);
      break; 

    default: 
      component = (<SongList
        resumeSong={resumeSong}
        pauseSong={pauseSong}
        audioControl={audioControl}
      />);
      break;
  }
  return component;
};

MainView.propTypes = {
  headerTitle: PropTypes.string,
  audioControl: PropTypes.func,
  resumeSong: PropTypes.func,
  pauseSong: PropTypes.func
};

export default MainView;