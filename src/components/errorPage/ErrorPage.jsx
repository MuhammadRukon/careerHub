import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div>ErrorPage</div>
      <Link to="/" className="btn">
        back to home
      </Link>
    </>
  );
};

export default ErrorPage;
