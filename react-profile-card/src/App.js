import avatar from "./avatar.JPG";
const desc =
  "Electrical and software engineer focused on web development and programming. When not coding or studying code, I like cooking, photography, and video games.";

const skills = [
  { skill: "NumPy", emoji: "🧮", color: "#F3722C", level: "advanced" },
  { skill: "Pandas", emoji: "🐼", color: "#009E74", level: "advanced" },
  { skill: "Matplotlib", emoji: "📊", color: "#FFD166", level: "advanced" },
  { skill: "Scikit-learn", emoji: "🤖", color: "#11698E", level: "advanced" },
  { skill: "Django", emoji: "🌐", color: "#EF476F", level: "intermediate" },
  { skill: "React.js", emoji: "⚛️", color: "#06D6A0", level: "beginner" },
  { skill: "Node.js", emoji: "🌐", color: "#FF003C", level: "intermediate" },
  { skill: "Vite", emoji: "🚀", color: "#FF7A5C", level: "beginner" },
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
  return <img className="avatar" src={avatar} alt="avatar" />;
}

function Data({ name, desc, skills }) {
  return (
    <div className="data body">
      <FullName name={name} />
      <Desc desc={desc} />
      <SkillList skills={skills} />
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

function SkillList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((el) => {
        return (
          <Skill
            skill={el.skill}
            emoji={el.emoji}
            color={el.color}
            level={el.level}
          />
        );
      })}
    </div>
  );
}

function Skill({ color, emoji, skill, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      {emoji} {skill}{" "}
      {level === "advanced" ? "💪" : level === "intermediate" ? "👍" : "👶"}
    </div>
  );
}
