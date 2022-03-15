export default function PhotoCard({ photos }) {
    const photoEls = photos.map((photo, idx) => {
        <img key={idx} src={photo}></img>
    })
  return (
    <>
        <h1>Photos</h1>
        <div>{photoEls}</div>
    </>
  );
}