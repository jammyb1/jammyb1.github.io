import { useParams } from 'react-router-dom';

function ImageView() {
  const { folder, image } = useParams();
  return (
    <div className="p-8 flex justify-center">
      <img src={`/${folder}/${image}`} alt={image} className="max-w-full max-h-screen" />
    </div>
  );
}

export default ImageView;
