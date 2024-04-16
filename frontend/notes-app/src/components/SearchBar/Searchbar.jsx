
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa'; // Assuming FaSearch is the correct icon you want to use
import { IoMdClose } from 'react-icons/io';


const Searchbar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-80 flex items-center px-4 bg-slate-100 rounded-md">
      <input
        type="text"
        placeholder="Search for Notes"
        className="w-full text-sx bg-transparent py-[11px] outline-none"
        value={value}
        onChange={onChange}
      />
      {value && <IoMdClose className='text-xl text-slate-400 cursor-pointer hover:text-black mr-3' onClick={onClearSearch}/>}
      <FaSearch className='text-slate-400 cursor-pointer hover:text-black'  onClick={handleSearch}/>
    </div>
  );
};

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired,
};

export default Searchbar;
