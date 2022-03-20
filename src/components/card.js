export const Card = ({ photo }) => {
  return (
    <article>
      <img src={photo} alt="" />
      <section className="info">
        <h1>Your Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          consectetur. Aut, dolor quia. Amet, perspiciatis necessitatibus
          accusantium velit ad distinctio?
        </p>
      </section>
      <section className="more">
        <h1>Read more</h1>
        <div>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-eye"></i>
          <i className="fa-solid fa-paperclip"></i>
        </div>
      </section>
    </article>
  );
};
