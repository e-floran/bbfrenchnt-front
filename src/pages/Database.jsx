import PlayersList from "../components/players/PlayersList";
import InProgress from "../components/reusableComponents/InProgress";

export default function Database() {
  const fakePlayers = [
    {
      name: "Player 1",
      age: 23,
      potential: 8,
      size: 196,
      js: 14,
      jr: 12,
      od: 14,
      ha: 18,
      dr: 18,
      pa: 12,
      is: 16,
      id: 12,
      re: 4,
      bl: 8,
      ss: 128,
    },
    {
      name: "Player 2",
      age: 24,
      potential: 9,
      size: 198,
      js: 14,
      jr: 12,
      od: 14,
      ha: 18,
      dr: 18,
      pa: 12,
      is: 20,
      id: 12,
      re: 4,
      bl: 8,
      ss: 132,
    },
    {
      name: "Player 3",
      age: 23,
      potential: 8,
      size: 196,
      js: 14,
      jr: 12,
      od: 14,
      ha: 18,
      dr: 18,
      pa: 12,
      is: 16,
      id: 12,
      re: 4,
      bl: 8,
      ss: 128,
    },
  ];
  return (
    <div className="pageGlobalContainer">
      <h2>Mettre à jour les joueurs dans notre base de données</h2>
      <InProgress />
      {/* <PlayersList players={fakePlayers} /> */}
    </div>
  );
}
