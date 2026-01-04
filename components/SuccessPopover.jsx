export default function SuccessPopover({
  open,
  title,
  message,
  onClose,
}) {
  if (!open) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {/* Close Button */}
        <button onClick={onClose} style={closeBtnStyle}>
          ✕
        </button>

        {/* Icon */}
        {/* <div style={iconWrapper}>
          ✅
        </div> */}

        {/* Content */}
        <h2 style={titleStyle}>{title}</h2>
        <p style={messageStyle}>{message}</p>

        {/* Action */}
        <button onClick={onClose} style={primaryBtn}>
          Got it
        </button>
      </div>
    </div>
  );
}



const overlayStyle = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.45)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 50,
};

const modalStyle = {
  position: "relative",
  backgroundColor: "#ffffff",
  padding: "32px 28px",
  borderRadius: "16px",
  width: "100%",
  maxWidth: "420px",
  textAlign: "center",
  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  animation: "fadeScaleIn 0.25s ease-out",
};

const closeBtnStyle = {
  position: "absolute",
  top: 14,
  right: 14,
  background: "transparent",
  border: "none",
  fontSize: "18px",
  cursor: "pointer",
  color: "#666",
};

const iconWrapper = {
  width: 64,
  height: 64,
  borderRadius: "50%",
  backgroundColor: "#e8f9f1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "28px",
  margin: "0 auto 16px",
};

const titleStyle = {
  fontSize: "20px",
  fontWeight: 600,
  marginBottom: "8px",
  color: "#111",
};

const messageStyle = {
  fontSize: "14px",
  color: "#555",
  marginBottom: "24px",
};

const primaryBtn = {
  padding: "10px 20px",
  backgroundColor: "#4f46e5",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 500,
};
