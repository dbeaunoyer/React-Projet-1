import "./App.css";
import MenuList from "./components/FilmList";




const Movies = [
  {
    id: 1,
    titre: "Mighty Ducks",
    synopsis : "Gordon Bombay est un avocat à succès de Minneapolis, toujours prêt à tout pour gagner. Arrêté pour conduite en état d'ivresse, il est condamné à des travaux d'intérêt général : devenir entraîneur de hockey sur glace, sport qu'il déteste par-dessus tout depuis un certain match décisif perdu en 1973 quand il était enfant. Gordon est très réticent mais doit se plier aux volontés du patron de son cabinet, M. Ducksworth.",
    afficheImage: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e4b6ce9f133f40006291a55%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D3500%26cropY1%3D67%26cropY2%3D2037",
    
    
  },
  {
    id: 2,
    titre: "Mms. Doubtfire",
    synopsis : "C'est l'histoire d' un homme nommer Daniel Hilard ( Robin Williams ) qui vient tout juste de divorcer de sa femme Miranda ( Sally Field ) . Suite à son divorce Daniel est priver de ses enfants qu'il aime plus que tout car sa femme Miranda en a obtenu la garde . ... Robin Williams est déchainé.",
    afficheImage: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F05%2Frobin-williams-2000.jpg",

  },
  {
    id: 3,
    titre: "Plaxmol",
    synopsis : "Le professeur Philip Brainard effectue des recherches sur une nouvelle source d'énergie. Il est assisté par le robot volant Weebo qu'il a construit, robot qui est amoureux de son créateur. Il arrive à mettre au point une substance verte qu'il baptise flubber (contraction de « flying rubber », « gomme volante »), dotée d'une volonté et capable de se métamorphoser, de s'étirer, de se démultiplier et de rebondir sans s'arrêter. Ensuite, il crée un moteur capable d'exploiter l'énergie fournie par le flubber, il transforme ainsi sa voiture en machine volante.",
    afficheImage: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DF3DE44EADFDE0803D03570823D3B9CC3F986805654FFCF75621902544632F93/scale?width=1200&aspectRatio=1.78&format=jpeg",

  },
  {
    id: 4,
    titre: "GhostBusters",
    synopsis : "Profitant du regain d'apparitions ectoplasmiques qui assaille soudainement la ville de New York, les trois compères sont bientôt débordés durant leur activité de chasseurs de fantômes et deviennent des vedettes locales, leurs interventions étant relayées dans les médias. Cependant, ils attirent également l’attention des autorités, en particulier de Walter Peck, un membre de la commission de protection de l'environnement (EPA) qui les prend en grippe et qui tentera de leur mettre des bâtons dans les roues.",
    afficheImage: "https://www.logodesignlove.com/wp-content/uploads/2009/12/ghostbusters-logo-on-black.jpg",

  },
  {
    id: 5,
    titre: "Chérie, j'ai réduit les enfants",
    synopsis : "Wayne Szalinski, un savant excentrique, a transformé sa maison en véritable laboratoire au grand désespoir de ses voisins, les Thompson, qui ne supportent plus le bruit quotidien du fer à souder. La dernière invention de Szalinski est une machine capable de miniaturiser la matière qu'il garde dans son grenier, à l'écart de sa femme Diane et de leurs deux enfants, Amy et Nick.",
    afficheImage: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0A5D6617225E98A08C69D0506681B29974A613B08CFC05F9EE69DFA7A3A94D4C/scale?width=1200&aspectRatio=1.78&format=jpeg",

  },
];


function App() {
  return (
    <div className="App">
      <MenuList menuItems={Movies} />
    </div>
  );
}

export default App;
