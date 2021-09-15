import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class Details extends React.Component {

    renderLaunch = () => {
        const { state } = this.props.location;

        if (state) {
            return (
                <div className="card card-body mb-3">
                    <div className="row">
                        <div className="col-md-5 text-center" style={{ display: !state.launch.links.flickr_images.length ? 'none' : '' }}>
                            <img src={state.launch.links.flickr_images[0]} alt="rocket" height="450"/>
                        </div>
                        <div className="col-md-7">
                            {/* <div className="text-left pr-5">

                                <h4>Mission: { state.launch.mission_name }</h4>
                                <p></p>
                                <p><b>Rocket Name:</b> {state.launch.rocket.rocket.name}</p>
                                <p><b>Rocket Stage:</b> {state.launch.rocket.rocket.stages}</p>                                
                                <p><b>Launch Year: </b>{ state.launch.launch_date_local }</p>
                                <p><b>Launch Details:</b> {state.launch.details}</p>
                            </div> */}
                            <div>
                                <h2 className="display-4 my-3">
                                    <span>{ state.launch.mission_name }</span>
                                </h2>
                                <h4 className="mb-3"> Details:
                                <p></p>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                             Rocket Name:  {state.launch.rocket.rocket.name}
                                        </li>
                                        <li className="list-group-item">
                                            Rocket Stage:  {state.launch.rocket.rocket.stages}
                                        </li>
                                        <li className="list-group-item">
                                            Launch Year:  { state.launch.launch_year }
                                        </li>
                                        <li className="list-group-item">
                                            Launch Details:  {state.launch.details}
                                        </li>
                                        <li className="list-group-item">
                                            Launch Successfully: {' '}
                                            <span 
                                                className={classNames({
                                                'text-success' : state.launch.launch_success === true,
                                                'text-danger' : state.launch.launch_success === false 
                                            })}
                                            > {state.launch.launch_success ? 'Yes' : 'No'}
                                            </span>
                                        </li>
                                    </ul>
                               </h4>
                            </div>
                            <div>
                                    <Link to="/"><button className="btn btn-primary">Back</button></Link> 
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return <div>No data available!</div>
    }
    
    render() {
        return (
            <div>
                {this.renderLaunch()}
            </div>
        );
    }
}

export default Details;