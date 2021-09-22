import InProgress from "../components/reusableComponents/InProgress";
import ScoutForm from "../components/scoutPlayers/ScoutForm";

export default function ScoutPlayers() {
  return (
    <div className="pageGlobalContainer">
      <h2>Récupérer les joueurs depuis l'API Buzzerbeater</h2>
      <ScoutForm />
      <InProgress />
    </div>
  );
}
