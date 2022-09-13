import classes from "./app.modules.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Site from "./components/Site";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Site />
    </QueryClientProvider>
  );
}

export default App;
