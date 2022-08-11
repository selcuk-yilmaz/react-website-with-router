const Card = ({ img, header, desc }) => {
  console.log(header, desc);
  return (
    <div className="card  mx-auto" style={{ maxWidth: 900 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{header}</h5>
            <p className="card-text">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
