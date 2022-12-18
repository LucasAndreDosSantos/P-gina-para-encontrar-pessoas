import './App.css';
import { AppBar, Container, Typography } from "@material-ui/core"
import PostarProcurados from './components/PostarProcurados';



function App() {
  return (
    // AppBar = "cabeçalho" do aplicativo
    <Container maxWidth="lg">
      <AppBar position="static" style = {{backgroundColor: "#cad8ed", color: "#3949ab"}}>
        <Typography variant="h3" align="center">
         PROCURADOS
        </Typography>

      </AppBar>

      <PostarProcurados />

    </Container>
  );
}

export default App;