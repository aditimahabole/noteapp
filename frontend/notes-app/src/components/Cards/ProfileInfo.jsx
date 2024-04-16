import { getInitials } from "../../utils/helper";
import PropTypes from "prop-types";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full items-center flex justify-center text-slate-950 font-medium bg-slate-100">
        {getInitials("Aditi mahabole")}
      </div>
      <div>
        <p className="text-sm font-medium">Aditi Mahabole</p>
        <button className="text-sm text-slate-700 underline" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};
ProfileInfo.propTypes = {
  onLogout: PropTypes.func.isRequired,
  // other prop types...
};
export default ProfileInfo;
