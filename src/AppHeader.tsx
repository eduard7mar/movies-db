import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, anonymousUser } from "./AuthContext";

interface Props {
  onLogin(): void;
  onLogout(): void;
}

export function AppHeader({ onLogin, onLogout }: Props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <LiveTvOutlinedIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          The Movies DB
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <nav>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/movies">Movies</HeaderLink>
            <HeaderLink to="/about">About</HeaderLink>
          </nav>
        </Box>
        <AuthSection onLogin={onLogin} onLogout={onLogout} />
      </Toolbar>
    </AppBar>
  );
}

interface AuthSectionProps {
  onLogin(): void;
  onLogout(): void;
}

function AuthSection({ onLogin, onLogout }: AuthSectionProps) {
  const auth = useContext(AuthContext);

  return auth.user !== anonymousUser ? (
    <>
      <Typography>Hello, {auth.user.name}!</Typography>
      <Button color="inherit" variant="outlined" onClick={onLogout} sx={{ ml: 1.5 }}>
        Log out
      </Button>
    </>
  ) : (
    <Button color="inherit" variant="outlined" onClick={onLogin}>
      Log in
    </Button>
  );
}

function HeaderLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link component={RouterLink} to={to} variant="button" color="inherit" sx={{ my: 1, mx: 1.5 }}>
      {children}
    </Link>
  );
}
