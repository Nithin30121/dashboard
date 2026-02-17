import StatCard from "./StatCard";


import bruceImg from "../assets/bruce.png";
import jackImg from "../assets/jack.png";
import ironImg from "../assets/iron.png";

export default function UserDashboard() {
  const cards = [
    {
      id: "bruce",
      theme: "purple",
      name: "Bruce",
      amount: 1250,
      abilities: ["Python", "Django", "PostgreSQL"],
      image: bruceImg,
      trendText: "+5.2% from last week",
      trendType: "up",
    },
    {
      id: "jack",
      theme: "gold",
      name: "Jack",
      amount: 53420,
      abilities: ["JavaScript", "React", "Node.js"],
       image: jackImg,
      trendText: "+3.4% from last week",
      trendType: "up",
    },
    {
      id: "iron",
      theme: "dark",
      name: "Iron",
      amount: 278,
      abilities: ["TypeScript", "Docker", "AWS"],
      image: ironImg,
      trendText: "+7.1% this week",
      trendType: "up",
    },
  ];

  return (
    <div className="page">
      <div className="bgOverlay" />
      <h1 className="title">USER DASHBOARD</h1>

      <div className="cardsRow">
        {cards.map((c) => (
          <StatCard key={c.id} {...c} />
        ))}
      </div>
    </div>
  );
}
