import "../../styles/reusableComponents/inProgress.css";

export default function InProgress() {
  return (
    <section className="inProgressContainer">
      <h3>Page actuellement en construction</h3>
      <p className="loader">🏀</p>
    </section>
  );
}
