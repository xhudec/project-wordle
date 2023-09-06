export default function Banner({ status, children }) {
  return <div className={`banner ${status}`}>{children}</div>;
}
