import React, { useEffect } from 'react';
import '../assets/styles/components/Player.scss';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';

import NotFound from './NotFound';
const Player = (props) => {
  const { id } = props.match.params;
  const hasPLaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);
  return hasPLaying ? (
    <>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Back
        </button>
      </div>
    </>
  ) : (
    <NotFound />
  );
};
const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
