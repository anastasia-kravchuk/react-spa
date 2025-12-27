import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import './BackButton.scss';

export const BackButton: React.FC = () => {
  return (
    <div className="back-button">
      <Link
        to="/"
        className="back-button-link"
      >
        <ArrowBack />
        Back to homepage
      </Link>
    </div>
  );
};
