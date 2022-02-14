import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default ({ handleChange, text, icon }) => {
  return (
    // <button onClick={handleChange}>
    //     <i className={icon}>{text}</i>
    // </button>
    <button>
      <FontAwesomeIcon
        onClick={handleChange}
        icon={icon}
        fixedWidth
      />
    </button>
  );
};
