import { Container } from "@mui/material";
import { CountdownVideo } from "./CountdownVideo";
import { CountdownText } from "./CountdownText";
import { MapView } from "./MapView";

function About() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <CountdownText />
      <CountdownVideo />
      <MapView />
    </Container>
  );
}

export default About;
