import React, { Component } from "react";
import firebase from "../../config/fire";
import { Redirect } from "react-router-dom";

export default class Facebook extends Component {
  constructor(props) {
    super(props);
    this.authWithFaceBook = this.authWithFaceBook.bind(this);
    this.state = {
      redirect: false
    };
    // this.state = { error: null };
  }

  authWithFaceBook() {
    firebase.doSignInWithFacebook().then((user, error) => {
      if (error) {
        alert("Unable to Sign in faceBook" + error);
      } else {
        //this.props.setCurrentUser(user);
        this.setSate({ redirect: true });
      }
    });
  }

  // onSubmit = event => {
  //   firebase
  //     .doSignInWithFacebook()
  //     .then(socialAuthUser => {
  //       this.setState({
  //         socialAuthUser: socialAuthUser.user.sendEmailVerification
  //       });
  //       this.props.history.replace("/dashboard");
  //     })
  //     .catch(error => {
  //       this.setState({ error });
  //     });

  //   event.preventDefault();
  // };

  render() {
    // const { error } = this.state;
    if (this.state.redirect === true) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <form>
        <button
          type="submit"
          onClick={() => {
            this.authWithFaceBook();
          }}
        >
          Sign In with Facebook
        </button>

        {/* {error && <p>{error.message}</p>} */}
      </form>
    );
  }
}
