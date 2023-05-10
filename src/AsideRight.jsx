const AsideRight = () => {
  return (
    <>
      <aside className="right">
        <div className="biography">
          <h4>BIOGRAPHY</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            hic dignissimos velit quisquam architecto expedita eligendi,
            assumenda repellat fugiat corporis eveniet minus maxime distinctio
            sit dolor laboriosam soluta quaerat nam. Saepe necessitatibus ipsam
            vero, eum accusantium ipsa
          </p>
        </div>
        <br />
        <div className="website">
          <h4>WEBSITE</h4>
          <a href="http://google">www.google.com/</a>
        </div>
        <div className="skill">
          <h4>SKILLS</h4>
          <button className="ps">Adobe Photoshop</button>
          <button className="react">React JS</button>
          <button className="node">Node JS</button>
        </div>
      </aside>
    </>
  );
};

export default AsideRight;
