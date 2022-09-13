import classes from "./app.modules.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Site from "./components/Site";
import About from "./components/About";
import Header from "./components/Header";
import MovieDetails from "./components/MovieDetails";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/movie-app" element={<Site />} />
          <Route path="/movie-app/about" element={<About />} />
          <Route path="/movie-app/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
