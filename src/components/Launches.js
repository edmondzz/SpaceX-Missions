import React, { Component } from 'react';
import { graphql } from '../GetData';
// import {Link, withRouter} from 'react-router-dom';
import LaunchItem from './LaunchItem';
import LaunchDetails from './Details';
const query = `query {
    launches {
        
        mission_name
        details
        launch_year
        launch_success
        launch_date_local
        links {
            flickr_images
        }
        rocket{
            rocket_name
            rocket {
                name
                stages
            }
        }
    }
  }`;

class Launches extends Component {
    state = {
        loading: true,
        launches: [],
        error: null,
        selected: null,
    };

    getDatta = () => {
        graphql.getData(query)
        .then(
            res => {
                this.setState({loading: false, launches: res.data.data.launches });
            }
        )
        .catch(
            err => {
                this.setState({loading: false, error: err});
            }
        );
    }

    componentDidMount() {
        this.getDatta();
    }

    mapData = () => {
        return this.state.launches.map((entry, index) => {
            return (
                <LaunchItem
                    key={index}
                    launch={entry}
                />
            );
        });
    }

    render() {
        if (this.state.selected) {
            return <LaunchDetails launch={this.state.selected}  handleClickBack={() => this.setState({selected: null})}/>;
        }
        if (this.state.loading) {
            return <div>Loading...</div>;
        }
        if (this.state.launches.length > 0) {
            return this.mapData();
        }
        return (
            <div>Something's wrong. Try again later.</div>
        )
    }
}

export default Launches;
