import React, { Component } from 'react';
import fire from '../config/firebase';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';


class DashBord extends Component {

    logout() {
        fire.auth().signOut();
    }
    render() {
        return (
            <Container component="main" maxWidth="xs" style={{ borderStyle: "ridge", marginTop: "10%" }} >
                <div style={{ marginTop: "20%", marginBottom: "20%" }}  >
                    <h1> You Are Logged In</h1>
                    <CssBaseline />
                    <button onClick={this.logout}>Logout</button>
                </div>
            </Container>
        )
    }
}
export default DashBord;
