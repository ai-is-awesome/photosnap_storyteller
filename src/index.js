import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./features/Loalding/Loading";
import "./stylesheets/main.scss";
import data from "./data";

const App = React.lazy(() => import("./App"));
const HomePage = React.lazy(() => import("./features/Home/HomePage"));
const FeaturesPage = React.lazy(() =>
  import("./features/pages/FeaturesPage/FeaturesPage")
);
const PricingPage = React.lazy(() =>
  import("./features/pages/PricingPage/PricingPage")
);
const StoriesPage = React.lazy(() =>
  import("./features/pages/StoriesPage/StoriesPage")
);
const StoryPage = React.lazy(() => import("./features/Storypage/StoryPage"));
//DATA
const StoryPageData = data.StoryPageData;

const Index = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route
              path="stories"
              element={<StoriesPage StoryPageData={StoryPageData} />}
            />
            <Route path="features" element={<FeaturesPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route
              path="/story/:id"
              element={<StoryPage StoryPageData={StoryPageData} />}
            />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
