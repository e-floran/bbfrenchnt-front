import "../../styles/form.css";

export default function LoginForm({
  loginName,
  loginPassword,
  setLoginName,
  setLoginPassword,
  bbApiLoging,
}) {
  return (
    <form className="apiRequestForm" onSubmit={(e) => bbApiLoging(e)}>
      <label>
        Identifiant :{" "}
        <input
          name="formLoginName"
          type="text"
          value={loginName}
          onChange={(e) => {
            setLoginName(e.target.value);
          }}
        />
      </label>
      <label>
        Mot de passe :{" "}
        <input
          name="formPlayerAge"
          type="password"
          value={loginPassword}
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
      </label>
      <button type="submit" onClick={(e) => bbApiLoging(e)}>
        Se connecter
      </button>
    </form>
  );
}
