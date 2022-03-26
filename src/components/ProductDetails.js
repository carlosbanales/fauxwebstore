import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  return (  
    <>
      <div>
        Product Details
      </div>
      <div>
        {params.id}
      </div>
    </>
  );
}

export default ProductDetails;