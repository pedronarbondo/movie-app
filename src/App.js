import classes from "./app.modules.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Site from "./components/Site";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Site />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
