import logo from './logo.svg';
import './App.css';
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function App() {
  return (
    <Container className="App" component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* 아이콘 원으로 및 색상 */}
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          {/* icon 사용 */}
          <LockOutlinedIcon />
        </Avatar>
        {/* h1 스타일 h5 */}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/* required 반드시 삽입 */}
        <TextField 
          margin="normal"
          label="Email Address" 
          required name="email" 
          autoComplete="email" 
          autoFocus 
          fullWidth
        />
        <TextField
          margin="normal"
          label="Password"
          type="password"
          required
          fullWidth
          name="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2}} fullWidth> Sign in </Button>
        {/*Grid container 행 */}
        {/* xs auto laye */}
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
      </Box>
    </Container>
  );
}

export default App;
