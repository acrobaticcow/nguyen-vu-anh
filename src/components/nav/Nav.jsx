import Button from "../button/Button";
import "./nav.css";
import { faBold, faItalic, faUnderline, faCoffee } from "@fortawesome/free-solid-svg-icons";
export default ({ handleBold, handleItalic, handleUnderLine }) => {
  return (
    <header>
      <div className="btn-group-left">
        <Button
          handleChange={handleBold}
          icon={faBold}
        />
        {/* <Button handleChange={handleAbout} text="About" />
        <Button handleChange={handleBlog} text="Blog" /> */}
        <Button
          handleChange={handleItalic}
          icon={faItalic}
        />
        <Button handleChange={handleUnderLine} icon={faUnderline} />
      </div>
      <div className="bn-group-right">
        <Button handleChange={handleBold} icon={faCoffee}/>
      </div>
    </header>
  );
};
