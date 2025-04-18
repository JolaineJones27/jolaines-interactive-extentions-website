import Switch from "react-switch";

// is switch on or off? then calls function when toggle is used
function Toggle({ isActive, onChange }) {
  return (
    <label>
      <Switch
        checked={isActive}
        onChange={onChange}
        onColor="#FF0000"
        onHandleColor="#FFFFFF"
        offColor="#808080"
        offHandleColor="#FFFFFF"
        uncheckedIcon={false}
        checkedIcon={false}
      />
    </label>
  );
}

export default Toggle;
