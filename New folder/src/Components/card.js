function Cards({title,img}) {
  var picheight = 180;
  var picwidth = 160;
  return (
    <div className="card ser-card text-center">
      <img
        src={img}
        className="card-img-top"
        alt=""
        height={picheight}
        width={picwidth}
      />

      <div className="card-body">
        <p className="card-text">{title}</p>
      </div>
    </div>
  );
}
export default Cards;
