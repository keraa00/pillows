export default function Button({
  text,
  bgColor = "transparent",
  txtColor,
  borderColor,
  hoverTxtColor,
  hoverBgColor,
  className = "",
}) {
  return (
    <button
      className={`md:text-md p-4 mt-6 rounded-md text-sm lg:text-md transition uppercase border font-semibold tracking-widest ${className}`}
      style={{
        color: `${txtColor}`,
        border: `1px solid ${borderColor}`,
        backgroundColor: `${bgColor}`,
        "--hover-text-color": hoverTxtColor,
        "--hover-bg-color": hoverBgColor,
      }}
      onMouseEnter={(e) => {
        e.target.style.color = hoverTxtColor;
        e.target.style.backgroundColor = hoverBgColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.color = txtColor;
        e.target.style.backgroundColor = bgColor;
      }}
    >
      {text}
    </button>
  );
}
