const desc =
  "Electrical and software engineer focused on web development and programming. When not coding or studying code, I like cooking, photography, and video games.";

const skills = [
  { skill: "NumPy", emoji: "🧮", colour: "#F3722C" },
  { skill: "Pandas", emoji: "🐼", colour: "#009E74" },
  { skill: "Matplotlib", emoji: "📊", colour: "#FFD166" },
  { skill: "Scikit-learn", emoji: "🤖", colour: "#11698E" },
  { skill: "Django", emoji: "🌐", colour: "#EF476F" },
  { skill: "React.js", emoji: "⚛️", colour: "#06D6A0" },
  { skill: "Node.js", emoji: "🌐", colour: "#FF003C" },
  { skill: "Vite", emoji: "🚀", colour: "#FF7A5C" },
];
function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <Avatar />
      <Data name="Ryan Baker" desc={desc} skills={skills} />
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="avatar" />;
}

function Data(props) {
  return (
    <div className="data body">
      <FullName name={props.name} />
      <Desc desc={props.desc} />
      <SkillList skills={props.skills} />
    </div>
  );
}

function FullName(props) {
  return <h1 className="h1">{props.name}</h1>;
}

function Desc(props) {
  return <p>{props.desc}</p>;
}
export default App;

function SkillList(props) {
  return (
    <div className="skill-list">
      {props.skills.map((el) => {
        console.log(el);
        return <Skill skill={el.skill} emoji={el.emoji} colour={el.colour} />;
      })}
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.colour }}>
      {props.skill} {props.emoji}
    </div>
  );
}
