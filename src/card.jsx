import React from 'react';

function Card() {
  return (
 <div className="card m-5">
  <img
    className="card-img-top"
    src="[https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Bob_Dylan_Nobel_Prize_ceremony_2016.jpg/1200px-Bob_Dylan_Nobel_Prize_ceremony_2016.jpg]"
    alt="bob deylan"
  />
  <div className="card-body">
    <h5 className="card-title">Bob Dylan</h5>
    <p className="card-text">
      Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American
      singer/songwriter, author, and artist who has been an influential figure
      in popular music and culture for more than five decades.
    </p>
    <a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">
      Go to wikipedia
    </a>
  </div>
</div>
  );
}

export default Card;