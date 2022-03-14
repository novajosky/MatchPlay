export default function PhotoCard({ photo }) {
  return (
    <article className="PhotoCard">
      <img src={photo.url} alt={photo.title} />
    </article>
  );
}