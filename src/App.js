import { useEffect, useState } from "react";
import { Card } from "./components/card";

export const App = () => {
  const [photos, updatePhotos] = useState([]);
  const [ready, updateReady] = useState(false);
  const [loading, updateLoading] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScroll(e));
    getBatch();
  }, []);

  const handleScroll = (e) => {
    const el = e.target.documentElement;
    const bottom = el.scrollHeight - el.scrollTop === el.clientHeight;
    if (bottom) {
      updateLoading(true);
      getBatch();
    }
  };

  const getBatch = async () => {
    let tmp = [];
    for (let i = 0; i < 12; i++) {
      const { url } = await fetch("https://picsum.photos/1000/1000?random=1");
      tmp.push(url);
    }
    updatePhotos((photos) => [...photos, ...tmp]);
    updateReady(true);
    updateLoading(false);
    document.body.style.overflow = "auto";
    return;
  };

  return (
    <>
      <div className="App">
        <SplashScreen ready={ready} />
        {photos.map((photo, i) => {
          return <Card photo={photo} key={i} />;
        })}
      </div>

      {loading && ready ? (
        <div className="loading">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

const SplashScreen = ({ ready }) => (
  <div className={`splashScreen ${ready ? "splashEnd" : ""}`}>
    <h1>INFINITE SCROLLER</h1>
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
