import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Moment from 'react-moment';

function LaunchItem(props) {
    const { launch } = props;
    return <div className="card card-body mb-3">
        
    <Link to={{pathname: "/launch/details", state: {launch}}}>
        <div className="row">
                <div className="col-md-12 text-center">
                <span><img src={launch.links.flickr_images[0]} alt="rocket" height="75" style={{ display: !launch.links.flickr_images.length ? 'none' : '' }} /></span>
                    <h4> Mission: 
                        <span className={classNames({
                            'text-success': launch.launch_success,
                            'text-danger': !launch.launch_success
                        })}>
                        { launch.mission_name }
                        </span>
                    </h4>
                    <p> Date: <Moment format="YYYY-MM-DD HH:mm">{ launch.launch_date_local }</Moment></p>
                </div>
        </div>
    </Link>
    </div>;
}

export default LaunchItem;