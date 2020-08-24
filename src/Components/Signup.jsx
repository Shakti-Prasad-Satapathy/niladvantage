import React, { Component } from 'react';
import fire from '../config/firebase';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class Signup extends Component {
    notify = () => {
        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_CENTER
        });
    }
    constructor(props) {
        super(props)
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }
    // login(e){
    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log("successfully logged in");
            toast("successfully logged in", { position: toast.POSITION.TOP_CENTER });
            alert("successfully logged in")

        }).catch((err) => {
            console.log(err);
            toast(err, { position: toast.POSITION.TOP_CENTER });
            alert("Please Enter Correct Credentials")


        })
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + ' ' + tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds();
        const currDate = "Current Date= " + date;
        let messageRef = fire.database().ref('login_details').orderByKey().limitToLast(100);
        fire.database().ref('login_details').push({ "UsersEmail": this.state.email, "Last loggedInDate&Time": currDate })

    }
    // signup(e){
    signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log("successfully ");
            toast("successfully signed up", { position: toast.POSITION.TOP_CENTER });
            alert("successfully signed up")

        }).catch((err) => {
            console.log(err);
            alert("Some Error occured in Regestring")

        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <Container component="main" maxWidth="xs" style={{ borderStyle: "ridge", marginTop: "10%" }} >
                <CssBaseline />
                <div className='paper' style={{ marginTop: "20%", marginBottom: "20%" }}  >
                    <div style = {{ display: "flex" , justifyContent : "center" }}>
                        <Avatar className='avatar' style={{ backgroundColor: 'deeppink' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                    </div>
                    <div>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                    </div>
                    <form className='form' noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="email"
                            id="emai"
                            name="email"
                            placeholder="Please Enter Your Email address"
                            onChange={this.handleChange}
                            value={this.state.email}
                            label="Email Address"
                            autoFocus
                        // helperText={this.state.error ? "Field should not be empty" : "Perfect!"}
                        // error={this.state.error}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            // autoComplete="current-password"
                            placeholder="Please Enter a Password"
                            onChange={this.handleChange}
                            value={this.state.password}
                        // helperText={this.state.error ? "Field should not be empty" : "Perfect!"}
                        // error={this.state.error}
                        />
                        <ToastContainer />
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10%" }}>
                            <Grid item xs={12} sm={5}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className='submit'
                                    onClick={this.login}
                                >
                                    Sign In
                            </Button>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className='submit'
                                    onClick={this.signup}
                                >
                                    Sign Up
                            </Button>
                            </Grid>
                        </div>
                    </form>
                </div>

            </Container>

        )
    }
}
export default Signup;
