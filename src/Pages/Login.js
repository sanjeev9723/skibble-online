import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate("/dashboard");
  };

  return (

    <section className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h5>Login</h5>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder="name"
          />
          <label for="floatingName">Name</label>
        </div>
        <div class="form-floating ">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            value={email}
            onChange={(e) => setEmail(e.target.value) }
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>

        <button type="submit" class="btn btn-primary ">
          login
        </button>
      </form>
    </section>

  );
};
export default Login;
