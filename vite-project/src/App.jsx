import "./App.css";
import Wine from "./Wine";

function App() {
  return (
    <>
      <Wine
        title="Château Margaux (France)"
        description="Full-bodied with notes of blackberry, cedar, and tobacco. Aged in French oak."
        rating="4.8/5"
      />
      <Wine
        title="Penfolds Grange (Australia)"
        description=" Rich, with dark fruits, spice, and chocolate notes. Highly structured and age-worthy."
        rating="4.7/5"
      />
      <Wine
        title="Cloudy Bay Sauvignon Blanc (New Zealand)"
        description="Fresh and zesty with tropical fruit and grassy undertones."
        rating=" 4.5/5"
      />
      <Wine
        title="Gaja Barbaresco (Italy)"
        description="Aromas of rose, cherry, and licorice with elegant tannins. A Piedmont classic."
        rating="4.6/5"
      />
      <Wine
        title="Dom Pérignon Vintage (France)"
        description=" Creamy mousse with citrus, brioche, and almond flavors. Luxurious texture."
        rating="4.9/5"
      />
    </>
  );
}

export default App;
