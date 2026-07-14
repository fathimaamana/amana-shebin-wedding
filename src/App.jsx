import { useState } from "react";

import Home from "./pages/Home";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import InvitationGate from "./components/InvitationGate/InvitationGate";

function App() {

  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  if (loading) {
    return (
      <LoadingScreen
        onComplete={() => setLoading(false)}
      />
    );
  }

  if (!opened) {
    return (
      <InvitationGate
        onOpen={() => {
          setPlayMusic(true);
          setOpened(true);
        }}
      />
    );
  }

  return (
    <Home playMusic={playMusic} />
  );
}

export default App;