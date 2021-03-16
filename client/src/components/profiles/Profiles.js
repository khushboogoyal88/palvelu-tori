import React, { Fragment, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import SearchBox from '../layout/Searchbox';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading }, match }) => {

  const keyword = match.params.keyword;

  useEffect(() => {
    getProfiles(keyword);
  }, [getProfiles, keyword]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Route render={({ history }) => <SearchBox history={history} />} />
          <h1 className='large text-primary'>All Services</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> Browse one step solution for
            all your Service needs
          </p>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
