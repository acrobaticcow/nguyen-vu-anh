import Button from "../button/Button";
import "./nav.css";
import { faBold, faItalic, faUnderline } from "@fortawesome/free-solid-svg-icons";
export default ({ handleBold, handleItalic, handleUnderLine }) => {
  return (
    <header>
      <h2 className="logo">Techmaster</h2>
      <div className="btn-group">
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
    </header>
  );
};
