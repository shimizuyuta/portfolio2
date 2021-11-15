import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Col,Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = ({login,isAuth}) => {
  
  let history = useNavigate();
  const classes = useStyles();
  console.log(isAuth,'isauth1')
  useEffect(()=>{
    if(isAuth){
      history('/')
    }
  },[isAuth])

  const [formData, setFormData] = useState( {
    email: '',
    password: ''
  } );
  const { email, password } = formData;

  const onChange = e => setFormData( { ...formData, [e.target.name]: e.target.value } );

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log('email,password',email,password)
    //ユーザーの入力を基にサーバーにデータを送り、そのデータをstateに保存。
    login({email,password})
    console.log(isAuth,'isauth1')

  }

  return (
    <>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ログイン
        </Typography>

        <form className={classes.form} noValidate>
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
            value={formData.email}
            onChange={e => onChange( e )}
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
            onChange={e => onChange( e )}
            value={formData.password}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
      <Col className="d-grid gap-2">
      <Button variant="contained" color="secondary" disableElevation>
        <span className="mx-1 px-1"><FontAwesomeIcon icon={faGoogle}/></span>ログイン
      </Button>
      <Button variant="contained"  disableElevation>
        <span className="mx-1 px-1"><FontAwesomeIcon icon={faGithub}/></span>ログイン
      </Button>
      
      </Col>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </>
  )
}

const mapStateToProps = state =>({
  isAuth:state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);
