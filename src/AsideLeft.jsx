import fotoAka from "../asset/PASFOTO_USAID ALKAMIL.png";

const AsideLeft = () => {
  return (
    <>
      <aside className="left">
        <img src={fotoAka} alt="" />
        <div className="tag-name">
          <h1>Usaid AKA</h1>
          <h2>Pemuka Agama</h2>
          <button>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              instagram
            </a>
          </button>
        </div>
        <div className="followers">
          <div className="followers-left">
            <h5>45</h5>
            <p>Post</p>
          </div>
          <div className="followers-middle">
            <h5>1,545</h5>
            <p>followers</p>
          </div>
          <div className="followers-right">
            <h5>18K</h5>
            <p>Likes</p>
          </div>
        </div>
        <div className="footer">
          <p>Collection</p>
          <p>Team</p>
          <p>Work in progress</p>
          <p>Blog</p>
          <p>Archives</p>
        </div>
        <p className="footer-word">lorem ipsum dolor sim met</p>
      </aside>
    </>
  );
};

export default AsideLeft;
