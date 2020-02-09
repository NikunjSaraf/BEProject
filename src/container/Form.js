import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import firebase from "../config/fire";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    //backgroundColor: theme.palette.secondary.main,
    backgroundColor: "#000000"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControl: {
    //margin: theme.spacing(1),
    marginTop: theme.spacing(2),
    //minWidth: 120,
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default function Login(props) {
  //const { classes } = props;
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState("");

  const handleChangeAge = event => {
    setValue(event.target.value);
  };
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const handleChange = event => {
    setAge(event.target.value);
  };

  if (!firebase.getCurrentUsername()) {
    // not logged in
    alert("Please login first");
    props.history.replace("/auth/login");
    return null;
  }

  return (
    <Container
      component="main"
      maxWidth="xs"
      //style={{ backgroundColor: "#000000" }}
    >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Please Complete Your Profile
        </Typography>
        <form
          className={classes.form}
          onSubmit={e => e.preventDefault() && false}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="off"
            autoFocus
            value={firebase.getCurrentUserEmailId()}
            disabled
            // onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="name"
            label="Full Name"
            type="text"
            id="name"
            autoComplete="off"
            value={firebase.getCurrentUsername()}
            // onChange={e => setPassword(e.target.value)}
          />
          <FormControl className={classes.formControl}>
            <InputLabel
              id="age"
              required
              variant="outlined"
              margin="normal"
              fullWidth
            >
              Age
            </InputLabel>
            <Select
              variant="outlined"
              margin="normal"
              required
              autocomplete="off"
              labelId="age"
              id="age"
              fullWidth
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>10-20</MenuItem>
              <MenuItem value={20}>21-30</MenuItem>
              <MenuItem value={30}>31-40</MenuItem>
              <MenuItem value={30}>41-50</MenuItem>
              <MenuItem value={30}>51-60</MenuItem>
              <MenuItem value={30}>61-70</MenuItem>
            </Select>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChangeAge}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Qualification</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChangeAge}
            >
              <FormControlLabel
                value="BE/B.Tech"
                control={<Radio />}
                label="BE/B.Tech"
              />

              <FormControlLabel value="BCA" control={<Radio />} label="BCA" />

              <FormControlLabel value="MCA" control={<Radio />} label="MCA" />

              <FormControlLabel value="BCS" control={<Radio />} label="BCS" />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Employed"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Students"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            //onClick={login}
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
