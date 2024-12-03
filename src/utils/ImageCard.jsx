import PropTypes from "prop-types";

function ImageCard({ img, className }) {
  return (
    <div className="break-inside-avoid mb-4">
      <img src={img} alt="" className={`w-full rounded-2xl ${className}`} />
    </div>
  );
}

export default ImageCard;

ImageCard.propTypes = {
  img: PropTypes.string.isRequired,
  className: PropTypes.string,
};
