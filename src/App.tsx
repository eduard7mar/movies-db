import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link as RouterLink, Outlet } from "react-router-dom";
import { AppBar, CssBaseline, Link, Toolbar, Typography } from "@mui/material";
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import { teal } from "@mui/material/colors";

const defaultTheme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: '#96000f'
    }
  }
});

function HeaderLink({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <Link component={RouterLink} to={to} variant="button" color="inherit" sx={{ my: 1, mx: 1.5 }}>
      {children}
    </Link>
  );
}

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LiveTvOutlinedIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            The Movies DB
          </Typography>
          <nav>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/movies">Movies</HeaderLink>
            <HeaderLink to="/about">About</HeaderLink>
          </nav>
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default App;