import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../styles/LoginPage.css';
import logo from '../assets/event-search-blue.png';


interface IState {
    value: number;
}
  
export default class LoginPage extends React.Component<{}, IState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
          value: 5,
        };
    }
  
    public render() {
      return <Container maxWidth="xs">
      <div className="LoginPage-container">
        {/* <Typography variant="h5">
          EventSearch
        </Typography> */}
        <img className="LoginPage-logo" src={logo} alt="Logo" />
        <form  noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
    }
}