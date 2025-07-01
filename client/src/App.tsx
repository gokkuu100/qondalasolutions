import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";
import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import Industries from "@/pages/Industries";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Healthcare from "@/pages/Healthcare";
import Logistics from "@/pages/Logistics";
import ConnectedSystems from "@/pages/ConnectedSystems";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/industries" component={Industries} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/healthcare" component={Healthcare} />
          <Route path="/logistics" component={Logistics} />
          <Route path="/connected-systems" component={ConnectedSystems} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
