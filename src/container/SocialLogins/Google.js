import React, { Component } from "react";
import firebase from "../../config/fire";

export default class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        this.setState({
          socialAuthUser: socialAuthUser.user.sendEmailVerification()
        });
        this.props.history("/dashboard");
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign In with Google</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
